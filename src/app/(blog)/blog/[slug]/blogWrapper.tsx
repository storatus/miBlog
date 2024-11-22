"use client";
import Image from "next/image";
type BlogWrapperProps = {
  title: string;
  imageUrl?: string;
  children: React.ReactNode;
};

export default function BlogWrapper({
  title,
  imageUrl,
  children,
}: BlogWrapperProps) {
  return (
    <>
      <section className="flex w-full flex-col items-center bg-gray-900 text-gray-300">
        <div className=" px-6 py-16 text-justify  md:py-20 ">
          <h1 className="mb-6 mt-8 text-center text-3xl font-bold text-gray-200 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              quality={80}
              priority
              width={800}
              height={400}
              className="mx-auto mb-10 size-2/3 justify-center rounded-lg object-cover sm:h-80"
            />
          )}
          <div className="mt-8 text-base leading-relaxed md:text-lg lg:text-xl 2xl:text-2xl">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
