"use client";

import Image from "next/image";
import { Copy, Trash2 } from "lucide-react";
import { useMemo } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { templates } from "@/constants";
import { Type } from "@prisma/client";
import {
  DeleteContent,
  UpdateContentPrivacy,
} from "@/lib/actions/content.actions";
import { useAuth } from "@clerk/nextjs";
import { ContentCardProps } from "@/types";
import redis from "@/lib/redis";

export default function ContentCard({ content }: { content: ContentCardProps }) {
  const { userId } = useAuth();

  const icon = useMemo(
    () => templates.find((template) => template.slug === content.slug)?.icon,
    [content.slug]
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content.content || "");
    toast.success("Content copied to clipboard");
  };

  const handleDelete = async () => {
    try {
      toast.loading("Deleting ...", { id: content.id });
      const response = await DeleteContent(content.id);
      if (response?.message === "success") {
        toast.success("Content deleted successfully", { id: content.id });
        await redis.del("content");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const UpdatePrivacy = async (value: Type) => {
    try {
      toast.loading("Updating privacy...", { id: content.id });
      const response = await UpdateContentPrivacy(content.id, value);
      if (response?.message === "success") {
        toast.success("Content updated successfully", { id: content.id });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="card-container">
      {/* Header */}
      <div className="card-header">
        <div className="card-title-wrapper">
          <Image
            src={
              icon ||
              "https://cdn-icons-png.flaticon.com/512/4133/4133589.png"
            }
            alt="Template Icon"
            width={24}
            height={24}
            className="rounded shrink-0"
          />
          <h3 className="card-title">{content.title}</h3>
        </div>
        <button onClick={handleCopy} className="copy-btn">
          <Copy size={16} className="text-muted-foreground" />
        </button>
      </div>

      {/* Description */}
      <div className="card-description">
        <p className="card-desc-text">{content.description}</p>
        {content.slug && (
          <Badge variant="default" className="slug-badge">
            {content.slug}
          </Badge>
        )}
      </div>

      {/* Footer */}
      <div className="card-footer">
        <span className="date-text">
          {new Date(content.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        {content.author.clerkId == userId && (
          <div className="justify-items-center gap-2">
            <Select
              defaultValue={content.privacy || "PRIVATE"}
              onValueChange={(value: Type) => UpdatePrivacy(value)}
            >
              <SelectTrigger className="privacy-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PRIVATE">Private</SelectItem>
                <SelectItem value="PUBLIC">Public</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              className="delete-btn"
            >
              <Trash2 size={16} className="text-destructive" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
