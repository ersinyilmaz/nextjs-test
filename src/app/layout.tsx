import "./globals.css"
import { Inter } from "next/font/google"
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Home",
  description: "Next.js test app!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-slate-50">
      <body className={inter.className}>
        <Header />
        <main className="container max-w-5xl">
          <div className="">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
