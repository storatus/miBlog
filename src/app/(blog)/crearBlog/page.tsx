import BlogForm from "@/app/components/BlogForm/BlogForm";

const CrearBlog = async () => {
  return (
    <main className="w-full">
      <h2 className="mt-16 text-4xl font-bold text-white">Crear Blog</h2>
      <div className="mt-12 bg-white rounded  w-2/3 mx-auto">
        <BlogForm />
      </div>
    </main>
  );
};
export default CrearBlog;
