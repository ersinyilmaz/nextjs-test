import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
  description: "This is the photos page!",
};

export default function PhotosPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">Photos</h1>
      <p>Photos page!</p>
    </div>
  );
}
