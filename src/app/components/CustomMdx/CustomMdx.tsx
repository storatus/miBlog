"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

type CustomMdxProps = {
  mdxSource: MDXRemoteSerializeResult;
};

export default function CustomMdx({ mdxSource }: CustomMdxProps) {
  return (
    <main>
      <article>
        <MDXRemote {...mdxSource} />
      </article>
    </main>
  );
}
