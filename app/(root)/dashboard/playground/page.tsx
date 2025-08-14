"use client";

import Loader from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import dynamic from "next/dynamic";

const OutputEditor = dynamic(() => import("@/components/Editor/OutputEditor"), {
  ssr: false,
  loading: () => <Loader />,
});

const page = () => {
  return (
    <div className="p-4 flex flex-col gap-5">
      <PageHeader title="Playground" subtitle="Write, experiment, and turn your ideas into saved creations." />
      <OutputEditor />
    </div>
  );
};

export default page;
