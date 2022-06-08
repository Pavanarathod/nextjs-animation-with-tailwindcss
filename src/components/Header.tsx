import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "95vh",
        position: "relative",
        clipPath: 'polygon("0 0, 100% 0, 100% 75vh, 0 100%")',
      }}
    >
      <div className="h-full bg-gradient-to-br z-0 from-lightgreen to-darkgreen absolute w-full opacity-20"></div>
      <div className="pt-10 px-14">
        <Image
          src="/images/logo-white.png"
          alt="logo"
          width={70}
          height={70}
          objectFit={"contain"}
        />
        <div className="mt-20 flex justify-center items-center">
          <div className="flex flex-col items-center space-y-20">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-6xl tracking-[2rem] uppercase">Outdoors</h1>
              <p className="text-3xl tracking-[1.5rem] bg-textwhite px-2 opacity-50">
                is where life happens
              </p>
            </div>

            <button>Discover our tours</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
