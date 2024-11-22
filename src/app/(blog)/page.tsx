import { getPosts } from "@/app/actions/blog";
import BlogList from "@/app/components/BlogList/BlogList";
import Link from "next/link";

const Blog = async () => {
  const posts = await getPosts();
  return (
    <>
      <div className="flex-1 mt-20">
        <h2 className="mt-16 text-center text-4xl font-bold text-white">
          Nuestro Blog
        </h2>
        <div className="mt-12">
          <Link href={"/crearBlog"}>Crear Blog</Link>
        </div>

        <BlogList posts={posts} />
      </div>
    </>
  );
};
export default Blog;
