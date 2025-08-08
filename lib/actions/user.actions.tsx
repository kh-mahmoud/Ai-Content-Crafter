"use server";

import { CreateUserParams } from "@/types";
import { prisma } from "../prisma";
import { User } from "@prisma/client";

export const createUser = async (userData: CreateUserParams) => {
  try {
    const user = await prisma.user.create({
      data: userData,
    });

    return user;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

//update users
export const updateUser = async (user: Partial<User>, id: string) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { clerkId: id },
      data: user,
    });

    if (!updatedUser) throw new Error("User not found");

    return updatedUser;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

//delete user
export const deleteUser = async (id: string) => {
  try {
    const deletedUser = await prisma.user.delete({ where: { clerkId: id } });
    if (!deletedUser) throw new Error("User not found");
    return deletedUser;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
