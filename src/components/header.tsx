import Link from "next/link";

const MENU = {
  "/": "Home",
  "/about": "About",
  "/blogs": "Blogs",
  "/photos": "Photos",
  "/videos": "Videos",
  "/contact": "Contact",
};

export default function Header() {
  return (
    <header className="">
      <nav className="bg-slate-50">
        <div className="max-w-5xl flex flex-wrap items-center justify-between mx-auto py-4">
          <Link href="/" className="flex item-center text-slate-900">
            <span className="self-center text-2xl font-extrabold whitespace-nowrap">LOGO</span>
          </Link>
          <div className="" id="">
            <ul className="flex flex-row space-x-8">
              {Object.entries(MENU).map(([key, value]) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <li>
                    <Link href={key} className="font-medium text-slate-900 hover:text-blue-700 focus:text-blue-900">
                      {value}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}