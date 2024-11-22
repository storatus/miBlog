"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getPosts = async () => {
  try {
    const fetchedPosts = await prisma.post.findMany();
    return fetchedPosts;
  } catch (error) {
    console.error("Failed to fetch chat sessions", error);
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
    console.error("Failed to fetch chat sessions", error);
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
    console.error("Failed to fetch chat sessions", error);
  }
};
