import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="max-w-6xl container mx-auto flex min-h-10 items-center justify-between bg-black px-2">
        <Link href={`/sobreMi`} className="flex w-1/5 items-center">
          <span className="  border-b border-opacity-70  text-xxs text-white text-opacity-90 hover:border-green-400 lg:p-1 lg:text-xs">
            Sobre Mi
          </span>
        </Link>
        <div className="flex flex-1  items-center justify-evenly text-xxs leading-3 md:text-sm">
          <Link
            href={`/terms`}
            className="text-opacity-8  justify-center hyphens-manual text-white hover:underline"
          >
            {"Terminos"}
          </Link>
        </div>
        <div className="flex w-1/5 items-center justify-end">
          <span className="text-xxs text-white text-opacity-80 md:text-sm">
            @ 2024 Mi Blog
          </span>
        </div>
      </footer>
    </>
  );
}
