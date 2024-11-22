import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostMetadata } from "./BlogList";

export default function BlogListCard({ ...post }: PostMetadata) {
  const { imageUrl, date, title, bio, slug } = post;
  return (
    <div className=" rounded-2xl bg-white shadow-md transition-transform duration-300  hover:scale-105 hover:shadow-lg">
      <div className="group w-full max-w-xl ">
        <div className="overflow-hidden rounded-t-2xl">
          <Image
            width={500}
            height={500}
            layout="responsive"
            quality={80}
            priority
            src={imageUrl}
            alt={title}
            className=" w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="my-4 flex text-gray-400">
            <h5 className="text-sm font-medium">{date}</h5>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-800">{title}</h3>
          <p className="mb-6 line-clamp-3 text-gray-600">{bio}</p>
          <Link
            href={`/blog/${slug}`}
            className="mt-4 flex items-center font-semibold text-yellow-500 transition-colors duration-200 hover:text-yellow-600"
          >
            Learn more
            <ArrowRightIcon className="ml-2 text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
}
