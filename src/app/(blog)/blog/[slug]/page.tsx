import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import React from "react";

import BlogWrapper from "./blogWrapper";
import { getPosts } from "@/app/actions/blog";
import { PostMetadata } from "@/app/components/BlogList/BlogList";
import CustomMdx from "@/app/components/CustomMdx/CustomMdx";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

type RecipePageProps = {
  params: { slug: string };
};

const getPostContent = async (slug: string) => {
  const folder = path.join(process.cwd(), "posts");

  if (!fs.existsSync(folder)) {
    console.error(`La carpeta ${folder} no existe.`);
    return {
      content: "",
      data: {},
    };
  }

  const fileContents = fs.readFileSync(path.join(folder, `${slug}.md`), "utf8");
  const matterResult = matter(fileContents);

  const { content, data } = matterResult;

  return {
    content: content || "",
    data,
  };
};

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts?.map((post: PostMetadata) => ({ slug: post.slug }));
};

export default async function PostPage({ params }: RecipePageProps) {
  const slug = params.slug;
  const { content, data } = await getPostContent(slug);
  const mdxSource = (await serialize(content)) as MDXRemoteSerializeResult;

  const { title, bio, imageUrl } = data;

  return (
    <main>
      <section className="mx-auto flex w-full flex-col items-center justify-center 2xl:w-2/3">
        <BlogWrapper title={title} bio={bio} imageUrl={imageUrl}>
          <CustomMdx mdxSource={mdxSource} />
        </BlogWrapper>
      </section>
    </main>
  );
}
