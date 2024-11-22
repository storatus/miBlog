"use client";
import React, { useState } from "react";

import BlogListCard from "./BlogListCard";
import { Post } from "@prisma/client";
import { deletePost } from "@/app/actions/blog";

type BlogListProps = {
  posts?: Post[];
};

export default function BlogList({ posts }: BlogListProps) {
  const [searchValue] = useState("");
  const [loading, setLoading] = useState("");

  const handleDeletePost = async (title: string) => {
    try {
      setLoading("deletePost");

      await deletePost(title);

      window.location.reload();
    } catch (error) {
      setLoading("");
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <div className="flex flex-row flex-wrap relative">
          {loading === "deletePost" && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}

          {posts
            ?.filter((val) =>
              val.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((post) => (
              <div key={post.title} className="w-1/4 min-h-60">
                <BlogListCard handleDeletePost={handleDeletePost} {...post} />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
