"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getPosts = async () => {
  try {
    const fetchedPosts = await prisma.post.findMany();
    return fetchedPosts;
  } catch (error) {
    console.error("Failed to get Posts", error);
  }
};

export const getPost = async (title: string) => {
  try {
    const fetchedPost = await prisma.post.findFirst({
      where: {
        title: title,
      },
    });
    return fetchedPost;
  } catch (error) {
    console.error("Failed to get Post", error);
  }
};

interface CreatePost {
  title: string;
  content: string;
}

export const createPost = async ({ content, title }: CreatePost) => {
  try {
    const fetchedCreatePost = await prisma.post.create({
      data: {
        content: content,
        title: title,
      },
    });

    return fetchedCreatePost;
  } catch (error) {
    console.error("Failed to create Post", error);
  }
};

export const deletePost = async (title: string) => {
  try {
    await prisma.post.delete({
      where: {
        title: title,
      },
    });
  } catch (error) {
    console.error("Failed to delete Blog", error);
  }
};
