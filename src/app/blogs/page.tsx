import BlogList from "@/components/blogs/blog-list/BlogList";

async function extractAllBlogs() {
  const res = await fetch(`${process.env.URL}/api/blog-post/get-all-posts`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Blogs() {
  const blogPostsLists = await extractAllBlogs();

 
  return (
    <BlogList lists={blogPostsLists}/>
  );
}
