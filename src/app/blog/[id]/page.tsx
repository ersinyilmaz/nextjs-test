import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is the blogs page!",
};

async function getPost(id: any) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  
  console.log(id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json(); 
}

export default async function BlogPage({ params }: { params: any }) {
  const { id, title, body } = await getPost(params.id);

  if (!params.id) {
    return notFound();
  }
  
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">{title}</h1>
      <Image
        className="rounded-lg my-5"
        src={`https://picsum.photos/1920/800?random=${id}`}
        alt="Blog Card Image"
        width={1920}
        height={800}
      />
      <div className="my-5">{body}</div>
    </div>
  );
}
