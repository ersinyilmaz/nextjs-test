import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is the about page!",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">About</h1>
      <p>About page!</p>
    </div>
  );
}
