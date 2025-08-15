import React from "react";
import ContentCard from "./ContentCard";
import { ContentCardProps, ContentListProps } from "@/types";



const ContentList = async ({ fetchData }: ContentListProps) => {
  const userContent = await fetchData();

  return (
    <div>
      {/* Content Grid */}
      <div className="templates-grid ">
        {userContent?.length ? (
          userContent.map((content) => (
            <ContentCard key={content.id} content={content} />
          ))
        ) : (
          <p className="text-muted-foreground">No content found.</p>
        )}
      </div>
    </div>
  );
};

export default ContentList;
