import React from "react";

const PageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-2 border-l-4 border-primary pl-4">
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="text-base text-muted-foreground max-w-md">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
