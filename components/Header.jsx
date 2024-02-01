import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-blue-300 h-[100px] flex flex-row text-white items-center flex-wrap">
      <div className="p-8">
        <Link href='/'>
          <Image src="/icon2.png" width="150" height="90" alt="icon" />
        </Link>
      </div>
      <div className="flex flex-row ml-[100px] gap-7">
      <Link href='/GiftcardListing'><div className="text-xl">Gifts</div></Link>
        <Link href='/about'><div className="text-xl">About Us</div></Link>
      </div>
    </div>
  );
}

export default Header;
