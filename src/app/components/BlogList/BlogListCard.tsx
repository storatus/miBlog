"use client";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Post } from "@prisma/client";

interface BlogListCardProps extends Post {
  handleDeletePost: (title: string) => Promise<void>;
}

export default function BlogListCard({
  handleDeletePost,
  ...post
}: BlogListCardProps) {
  const { content, title } = post;

  const [isOptions, setIsOptions] = useState(false);

  return (
    <div className="h-full p-1">
      <div className=" w-full max-w-xl bg-white shadow-md hover:shadow-lg break-words rounded-2xl   transition-transform duration-300 min-h-full">
        <div className="overflow-hidden rounded-t-2xl h-32">
          <Image
            width={600}
            height={600}
            priority
            src={"https://picsum.photos/400/400"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2 flex flex-col h-full">
          <div>
            <div
              onClick={() => {
                setIsOptions(!isOptions);
              }}
              className=" cursor-pointer mb-2 flex items-center text-gray-400 hover:text-gray-600"
            >
              <span className="underline">Ajustar</span>
            </div>

            {isOptions && (
              <div
                onClick={() => handleDeletePost(title)}
                className="flex items-center justify-end  bg-white w-auto py-4"
              >
                <div className=" rounded border-red-400 h-8 w-20 border-2 justify-center items-center flex">
                  <span className="text-red-400">Borrar</span>
                </div>
              </div>
            )}
          </div>
          <div className="min-h-20">
            <h3 className="text-2xl font-bold text-gray-80">{title}</h3>
          </div>
          <div className="flex-1 ">
            <p className=" line-clamp-3 text-gray-600">{content}</p>
          </div>
          <div className="h-12 flex items-center justify-between px-2">
            <Link
              href={`/blog/${title}`}
              className=" flex items-center font-semibold text-yellow-500 transition-colors duration-200 hover:text-yellow-600"
            >
              Ver mas
              <ArrowRightIcon className="ml-2 text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
