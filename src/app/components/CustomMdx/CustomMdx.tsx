/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { MDXRemote } from "next-mdx-remote";
import React from "react";

type CustomMdxProps = {
  mdxSource: any;
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
