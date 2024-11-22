"use client";
import React, { useState } from "react";

import BlogListCard from "./BlogListCard";

export type PostMetadata = {
  title: string;
  date: string;
  imageUrl: string;
  bio: string;
  slug: string;
};

type BlogListProps = {
  posts?: PostMetadata[];
};

export default function BlogList({ posts }: BlogListProps) {
  const [searchValue] = useState("");

  return (
    <>
      <section>
        <div className=" mx-auto px-6 lg:px-8">
          <div className="flex flex-row flex-wrap py-24">
            {posts
              ?.filter((val) =>
                val.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((post) => (
                <div
                  key={post.slug}
                  className="mx-auto flex w-3/4 justify-center"
                >
                  <BlogListCard {...post} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
