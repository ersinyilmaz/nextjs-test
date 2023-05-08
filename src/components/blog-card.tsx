import Link from "next/link"
import Image from "next/image"

export default function BlogCard({ id, title, body }: { id: number; title: string; body: string }){
  return (
    <div>
      <Link href={`blog/${id}`} className="blog-card">
        <div className="flex flex-row items-center content-center gap-5 my-5">
          <div className="basis-1/6 ">
            <Image
              className="rounded-lg"
              src={`https://picsum.photos/300/200?random=${id}`}
              alt="Blog Card Image"
              width={300}
              height={200}
            />
          </div>
          <div className="basis-5/6">
            <div className="">
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="text-base line-clamp-3">{body}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}