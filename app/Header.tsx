import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          alt="airbnb logo"
          className="object-contain object-left"
        />
      </div>

      <div></div>

      <div></div>
    </header>
  );
}

export default Header;
