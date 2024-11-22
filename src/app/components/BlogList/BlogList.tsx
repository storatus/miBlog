"use client";
import React, { useState } from "react";

import BlogListCard from "./BlogListCard";
import { Post } from "@prisma/client";

type BlogListProps = {
  posts?: Post[];
};

export default function BlogList({ posts }: BlogListProps) {
  const [searchValue] = useState("");

  return (
    <>
      <section>
        <div className="flex flex-row flex-wrap">
          {posts
            ?.filter((val) =>
              val.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((post) => (
              <div key={post.title} className="w-1/4 min-h-60">
                <BlogListCard {...post} />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
