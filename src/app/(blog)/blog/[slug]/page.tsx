// import fs from "node:fs";
// import path from "node:path";

// import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import React from "react";

import BlogWrapper from "./blogWrapper";
import CustomMdx from "@/app/components/CustomMdx/CustomMdx";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPost } from "@/app/actions/blog";
import { Post } from "@prisma/client";

type Params = Promise<{ slug: string }>;

const PostPage = async (props: { params: Params }) => {
  const params = await props.params;

  const { content, title } = (await getPost(params.slug)) as Post;
  const mdxSource = (await serialize(content)) as MDXRemoteSerializeResult;

  return (
    <main>
      <section className="mx-auto flex w-full flex-col items-center justify-center 2xl:w-2/3">
        <BlogWrapper title={title}>
          {mdxSource && <CustomMdx mdxSource={mdxSource} />}
        </BlogWrapper>
      </section>
    </main>
  );
};

export default PostPage;
