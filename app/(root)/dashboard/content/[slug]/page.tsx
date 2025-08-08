"use client";

import InputForm from "@/components/forms/InputForm";
import { templates } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

const OutputEditor = dynamic(() => import("@/components/Editor/OutputEditor"), {
  ssr: false,
  loading: () => <Loader />,
});

const Page = () => {
  const { slug } = useParams();
  const templateType = templates.find((template) => template.slug == slug)!;

  const [result, setResult] = useState<string>("");

  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const editorData = {
    result,
    formValues,
    templateType,
  };

  return (
    <section className="flex flex-col xl:flex-row gap-4 px-2 py-3">
      {/* Input Section */}
      <section className="lg:w-1/3 lg:min-w-1/3 w-full pr-2 input-section-container">
        <div className="mb-7 flex flex-col gap-2">
          <Image
            src={templateType.icon}
            alt={templateType.name}
            width={45}
            height={45}
          />
          <div>
            <h3 className="font-bold text-primary text-lg">{templateType.name}</h3>
            <p className="text-sm font-semibold text-gray-600">{templateType.desc}</p>
          </div>
        </div>

        {/* 👇 Pass setFormValues */}
        <InputForm
          templateType={templateType}
          setResult={setResult}
          setFormValues={setFormValues}
        />
      </section>

      {/* Output Section */}
      <section className="w-full flex-grow overflow-auto">
        {/* 👇 You can pass editorData if needed */}
        <OutputEditor aiOutput={result} editorData={editorData} />
      </section>
    </section>
  );
};

export default Page;
