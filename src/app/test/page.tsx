import Link from "next/link";

const Test = async () => {
  return (
    <>
      <div className="flex-1 mt-20 text-white">
        <h2 className="mt-16 text-center text-4xl font-bold ">
          Nuestro Pagina test
        </h2>
        <div className="mt-12">
          <Link href={"/crearBlog"}>Crear Blog</Link>
        </div>
      </div>
    </>
  );
};
export default Test;
