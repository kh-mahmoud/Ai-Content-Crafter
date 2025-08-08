import "server-only";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "../prisma";

export const GetUser = async () => {

  const { userId } = await auth();
  if (!userId) redirect("/");

  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
