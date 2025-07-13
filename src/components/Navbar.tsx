import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 py-6 px-8">
      <div className="flex-1">
        <Link
          href="/"
          className="text-5xl font-bold px-4 select-none font-[family-name:var(--font-cormorant-garamond)]"
        >
          AROHA
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-5">
          <li>
            <Link href="/store" className="text-2xl">
              Store
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
