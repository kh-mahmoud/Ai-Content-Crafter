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
    editorInstance.setMarkdown(editorData.result);

    // Listen for changes
    editorInstance.on("change", () => {
      const content = editorInstance.getMarkdown().trim();
      setHasContent(content.length > 0);
    });

    // Initial check
    setHasContent(editorData.result.trim().length > 0);
  }, [editorData.result]);

  const generateMetadata = async (content: string) => {
    // If content hasn't changed, reuse old metadata
    if (content === lastContent && title && description) {
      return { title, description };
    }

    const newTitle = await AiGenerate({
      model: "gemini-2.5-flash",
      prompt:
        `Return ONLY a short title (max 6 words, no punctuation except spaces) for the following content: ${content}` ||
        "",
    });

    const newDescription = await AiGenerate({
      model: "gemini-2.5-flash",
      prompt:
        `Return ONLY a single-sentence description (max 20 words) for the following content: ${content}` ||
        "",
    });

    setTitle(newTitle.result);
    setDescription(newDescription.result);
    setLastContent(content);

    return { title: newTitle.result, description: newDescription.result };
  };

  const handleSave = async () => {
    try {
      if (!hasContent)
        return toast.error("Please provide content before saving");

      setSaveLoad(true);
      editorData.setLoading(true);
      const editorInstance = editorRef.current?.getInstance();
      const currentContent = editorInstance.getMarkdown().trim();

      const { title, description } = await generateMetadata(currentContent);
      const { loading, setLoading, ...dataToSave } = editorData;

      const content = await Save_Content({
        ...dataToSave,
        title,
        description,
        contentId,
      });

      if (content?.message === "success") {
        setContentId(content?.data?.id);
        toast.success("Content saved successfully");
        setLoading(false);
        setSaveLoad(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePublish = async () => {
    try {
      if (!hasContent)
        return toast.error("Please provide content before publishing");

      setSaveLoad(true);
      editorData.setLoading(true);
      const editorInstance = editorRef.current?.getInstance();
      const currentContent = editorInstance.getMarkdown().trim();

      const { title: metaTitle, description: metaDesc } =
        await generateMetadata(currentContent);

      const { loading, setLoading, ...dataToPub } = editorData;

      const content = await Publish_Content({
        ...dataToPub,
        title: metaTitle,
        description: metaDesc,
        contentId,
      });

      if (content?.message === "success") {
        router.push(`/dashboard/explore`);
        setSaveLoad(false);
        editorData.setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-bold text-primary text-xl">Result</h1>
        <div className="flex gap-2">
          <Button
            onClick={handleSave}
            className="bg-success"
            disabled={!hasContent || editorData.loading || SaveLoad}
          >
            Save
          </Button>
          <Button
            onClick={handlePublish}
            className="bg-primary"
            disabled={!hasContent || editorData.loading || SaveLoad}
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
