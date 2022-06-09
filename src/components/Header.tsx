import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [animateState, setAnimateState] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateState(true);
    }, 1000);
  }, []);

  return (
    <header
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "95vh",
        position: "relative",
        clipPath: 'polygon("0 0, 100% 0, 100% 75vh, 0 100%")',
        borderRadius: "15px",
      }}
    >
      {/* <div className="h-full bg-gradient-to-br z-0 from-primaryLight to-primaryDark absolute w-full opacity-30"></div> */}
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
              <h1
                className={`text-6xl tracking-[2rem] uppercase transition-all duration-[2s] delay-500 ${
                  animateState
                    ? "translate-x-10 opacity-[1]"
                    : "opacity-0 -translate-x-[100px]"
                }`}
              >
                Outdoors
              </h1>
              <p
                className={`text-3xl tracking-[1.5rem] bg-white px-2 delay-500 uppercase transition-all duration-[2s] ${
                  animateState
                    ? "opacity-50 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                is where life happens
              </p>
            </div>

            <button className="uppercase px-10 py-5 bg-white rounded-full transition-all duration-300 hover:-translate-y-1 active:-translate-y-[1px] active:shadow-2xl cursor-pointer">
              Discover our tours
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
