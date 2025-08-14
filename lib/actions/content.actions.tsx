"use server";

import { ContentProps } from "@/types";
import { prisma } from "../prisma";
import { GetUser } from "../data/user.data";
import {Type } from "@prisma/client";
import { revalidatePath } from "next/cache";


//save the user content
export const Save_Content = async (userContent: ContentProps) => {
  try {
    const user = await GetUser();
    

    let content;
    if (userContent.contentId) {
      // Update existing content
      content = await prisma.content.update({
        where: { id: userContent.contentId },
        data: {
          formData: JSON.stringify(userContent.formValues),
          content: userContent.result,
        },
      });
    } else {
      // Create new content
      content = await prisma.content.create({
        data: {
          title: userContent.title,
          description: userContent.description,
          formData: JSON.stringify(userContent.formValues),
          content: userContent.result,
          slug: userContent?.templateType?.slug,
          author: {
            connect: { id: user?.id },
          },
        },
      });
    }

    return { message: "success", data: content };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

//publish content
export const Publish_Content = async (userContent: ContentProps) => {
  try {
    const user = await GetUser();

    let content;
    if (userContent.contentId) {
      // Update existing content's privacy and result
      content = await prisma.content.update({
        where: { id: userContent.contentId },
        data: {
          privacy: "PUBLIC",
          content: userContent.result,
        },
      });
    } else {
      // Create and publish new content
      content = await prisma.content.create({
        data: {
          title: userContent.title,
          description: userContent.description,
          formData: JSON.stringify(userContent?.formValues),
          content: userContent.result,
          slug: userContent?.templateType?.slug,
          author: {
            connect: { id: user?.id },
          },
          privacy: "PUBLIC",
        },
      });
    }

    return { message: "success", data: content };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};


export const DeleteContent = async (contentId: string) => {
  try {
    const deletedContent = await prisma.content.delete({ where: { id: contentId } });
    if (!deletedContent) throw new Error("Content not found");
    revalidatePath('/vault')
    revalidatePath('/explore')
    return { message: "success", data: deletedContent };
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

export const UpdateContentPrivacy = async(contentId: string, privacy:Type)=>{
    try {
    const updatedContent = await prisma.content.update({ where: { id: contentId },data: { privacy } });
    if (!updatedContent) throw new Error("Content not found");
    revalidatePath("/explore")
    return { message: "success", data: updatedContent };
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}
