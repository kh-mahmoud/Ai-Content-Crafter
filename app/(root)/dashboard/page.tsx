"use client";

import React, { useState, useMemo } from "react";
import { templates } from "@/constants";
import TemplateCard from "@/components/TemplateCard";
import Searchbar from "@/components/Searchbar";

const Page = () => {
  const [search, setSearch] = useState("");

  const filteredTemplates = useMemo(() => {
    return templates.filter(
      (template) =>
        template.name.toLowerCase().includes(search.toLowerCase()) ||
        template.desc.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url(/banner-bg.png)] bg-cover bg-center gap-y-5 bg-no-repeat flex flex-col items-center justify-center p-10 text-white text-center">
        <h2 className="md:text-5xl font-bold leading-tight  text-center">
          Unleash Your Creative Visions <br />
          With <span className="text-[#FFED8A]">Verbi AI</span>
        </h2>
        <p className="text-lg max-w-2xl">
          Discover a suite of AI-powered tools designed to help you create
          content faster, better, and smarter.
        </p>
        <Searchbar search={search} setSearch={setSearch} />
      </section>

      {/* Templates Section */}
      <section className="p-10 bg-background">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
        {filteredTemplates.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No templates match your search.
          </p>
        )}
      </section>
    </div>
  );
};

export default Page;
