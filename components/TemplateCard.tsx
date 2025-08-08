import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { TemplateType } from "@/types";
import Link from "next/link";

const TemplateCard = ({ template }: { template: TemplateType }) => {
  return (
    <div className="card-container">
      <div className="flex items-center gap-3 mb-4">
        <Image src={template.icon} alt={template.name} width={40} height={40} />
        <div>
          <h3 className="font-semibold text-lg line-clamp-1">
            {template.name}
          </h3>
          <p className="text-sm text-gray-500">{template.category}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{template.desc}</p>
      <Link href={`/dashboard/content/${template.slug}`} className="w-full">
        <Button className="w-full" variant="outline">
          Use Template
        </Button>
      </Link>
    </div>
  );
};

export default TemplateCard;
