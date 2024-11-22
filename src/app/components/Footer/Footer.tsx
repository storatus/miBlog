import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="max-w-6xl container mx-auto flex min-h-10 items-center justify-between bg-black px-2">
        <Link href={`/`} className="flex w-1/5 items-center">
          <span className="  border-b border-opacity-70  text-xxs text-white text-opacity-90 hover:border-green-400 lg:p-1 lg:text-xs">
            Home
          </span>
        </Link>

        <div className="flex w-1/5 items-center justify-end">
          <span className="text-xxs text-white text-opacity-80 md:text-sm">
            @ 2024 Mi Blog
          </span>
        </div>
      </footer>
    </>
  );
}
