import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-primary z-[50]">
      <div className="container mx-auto px-4">
        <div className="py-2  text-xs text-white  justify-center items-center font-semibold">
          <p>
            Supplements Simplified for You -{" "}
            <Link href="#" className="underline">
              Learn More
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
