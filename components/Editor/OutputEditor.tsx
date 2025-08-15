"use client";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect, useRef, useState } from "react";
import { outputEditorProps } from "@/types";
import { Button } from "../ui/button";
import { AiGenerate } from "@/lib/AiModel";
import { Publish_Content, Save_Content } from "@/lib/actions/content.actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const OutputEditor = ({ editorData }: outputEditorProps) => {
  const editorRef: any = useRef(null);

  const [contentId, setContentId] = useState<string>();
  const [hasContent, setHasContent] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [lastContent, setLastContent] = useState<string>("");
  const [SaveLoad, setSaveLoad] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance.setMarkdown(editorData?.result);

    editorInstance.on("change", () => {
      const content = editorInstance.getMarkdown().trim();
      setHasContent(content.length > 0);
    });

    setHasContent(editorData?.result ? editorData?.result?.trim().length > 0 : false);
  }, [editorData?.result]);

  const generateMetadata = async (content: string) => {
    if (content === lastContent && title && description) {
      return { title, description };
    }

    const newTitle = await AiGenerate({
      model: "gemini-2.5-flash",
      prompt:
        `Return ONLY a short title (max 6 words, no punctuation except spaces) for the following content: ${content}` || "",
    });

    const newDescription = await AiGenerate({
      model: "gemini-2.5-flash",
      prompt:
        `Return ONLY a single-sentence description (max 20 words) for the following content: ${content}` || "",
    });

    setTitle(newTitle.result);
    setDescription(newDescription.result);
    setLastContent(content);

    return { title: newTitle.result, description: newDescription.result };
  };

  const processContent = async (mode: "save" | "publish") => {
    if (!hasContent) return toast.error(`Please provide content before ${mode}ing`);
    toast.loading(`${mode === "save" ? "Saving" : "Publishing"}...`, { id: contentId + mode });
    setSaveLoad(true);
    editorData?.setLoading?.(true);

    const editorInstance = editorRef.current?.getInstance();
    const currentContent = editorInstance.getMarkdown().trim();
    const { title, description } = await generateMetadata(currentContent);
    const { loading, setLoading, ...data } = editorData || {};

    const action = mode === "save" ? Save_Content : Publish_Content;
    const result = await action({
      ...data,
      result: currentContent,
      title,
      description,
      contentId,
    });

    if (result?.message === "success") {
      if (mode === "save") setContentId(result?.data?.id);
      else router.push(`/dashboard/explore`);
      toast.success(`Content ${mode}d successfully`, { id: contentId + mode });
    }

    setSaveLoad(false);
    editorData?.setLoading?.(false);
  };

  return (
    <>
      <div className="editor-header">
        <h1 className="editor-title">Result</h1>
        <div className="editor-buttons">
          <Button
            onClick={() => processContent("save")}
            className="btn-save"
            disabled={!hasContent || editorData?.loading || SaveLoad}
          >
            Save
          </Button>
          <Button
            onClick={() => processContent("publish")}
            className="btn-publish"
            disabled={!hasContent || editorData?.loading || SaveLoad}
          >
            Publish
          </Button>
        </div>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Got any creative ideas today?"
        previewStyle="vertical"
        height="550px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        usageStatistics={false}
      />
    </>
  );
};

export default OutputEditor;
