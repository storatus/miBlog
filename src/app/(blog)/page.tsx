// import { getPostMetadata } from "@/lib/getPostMetadata";

import { getPosts } from "@/app/actions/blog";
import BlogList from "@/app/components/BlogList/BlogList";

const Blog = async () => {
  const posts = await getPosts();
  return (
    <main>
      <h2 className="mt-16 text-center text-4xl font-bold text-gray-700">
        Nuestro Blog
      </h2>
      <BlogList posts={posts} />
    </main>
  );
};
export default Blog;
