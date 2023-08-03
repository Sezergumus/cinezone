import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        {/* <div className="upper-header bg-[#1A1A1A] w-full py-1">
                <div className="upper-header-container max-w-[90%] mx-auto">
                    <p className='text-white text-right'>CEVAHIR IMAX</p>
                </div>
            </div> */}
        <div className="lower-header bg-[#222222] w-full">
          <div className="lower-header-container max-w-[90%] mx-auto flex items-center justify-between">
            <div className="logo py-4">
              <Link href="/">
                <h1 className="text-white text-3xl">
                  CINE<span className="font-bold">ZONE</span>
                </h1>
              </Link>
            </div>
            <div className="nav-links text-white flex gap-6 items-center">
              <Link href="/movies" className="transition hover:text-[#0086CC]">
                Movies
              </Link>
              <Link href="/" className="transition hover:text-[#0086CC]">
                Menu
              </Link>
              <Link href="/">
                <button className="border-white border-2 rounded-full px-4 py-2 font-bold hover:bg-[#fff] transition hover:text-black">
                  QUICK BUY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
