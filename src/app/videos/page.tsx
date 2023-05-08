import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description: "This is the videos page!",
};

export default function VideosPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">Videos</h1>
      <p>Videos page!</p>
    </div>
  );
}
