"use client";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { useEffect, useRef, useState } from "react";
import { outputEditorProps } from "@/types";
import { Button } from "../ui/button";
import { AiGenerate } from "@/lib/AiModel";

const OutputEditor = ({aiOutput,editorData}:outputEditorProps) => {
  const editorRef:any = useRef(null);


  useEffect(()=>
  {
     const editorInstance= editorRef.current?.getInstance()
     editorInstance.setMarkdown(aiOutput)
  },[aiOutput])

  const handleSave = async()=>
  {
     
  }

  const handlePublish = async()=>
  {

  }


  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-bold text-primary text-xl">Result</h1>

        <div className='flex gap-2'>
            <Button onClick={handleSave} className="bg-success">Save</Button>
            <Button onClick={handlePublish} className="bg-primary">Save & Publish</Button>
        </div>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Got any creative ideas today ?"
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
