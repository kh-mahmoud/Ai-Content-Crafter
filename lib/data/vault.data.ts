import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import "server-only"
import { GetUser } from "./user.data";
import { prisma } from "../prisma";




export const GetContent = async ()=>
{
      const user = await GetUser()

      try {
        const content = await prisma.content.findMany({
          where: {
            userId: user?.id,
          },include: {
            author: {
              select: {
                clerkId: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        });

        return content;
      } catch (error) {
         console.log(error)
      }finally{
        await prisma.$disconnect();
      }
}

export const GetPublicContent = async () => {
  try {
    const content = await prisma.content.findMany({
      where: {
        privacy: "PUBLIC",
      },include:{
        author: {
          select: {
            clerkId: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return content;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};