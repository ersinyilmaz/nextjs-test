import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is the contact page!",
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">Contact</h1>
      <p>Contact page!</p>
    </div>
  );
}
