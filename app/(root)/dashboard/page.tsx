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
      <section className="hero-section">
        <h2 className="hero-title">
          Unleash Your Creative Visions <br />
          With <span className="hero-highlight">Verbi AI</span>
        </h2>
        <p className="hero-subtitle">
          Discover a suite of AI-powered tools designed to help you create
          content faster, better, and smarter.
        </p>
        <Searchbar search={search} setSearch={setSearch} />
      </section>

      {/* Templates Section */}
      <section className="templates-section">
        <div className="templates-grid">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
        {filteredTemplates.length === 0 && (
          <p className="no-results-text">
            No templates match your search.
          </p>
        )}
      </section>
    </div>
  );
};

export default Page;
