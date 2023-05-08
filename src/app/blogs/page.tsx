import { useEffect } from "react";
import type { Metadata } from "next";
import BlogCard from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blogs",
  description: "This is the blogs page!",
};

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=10")

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function BlogsPage() {
  const { posts } = await getPosts();

  console.log(posts);

  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">Blogs</h1>
      {posts.map((post: any) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
