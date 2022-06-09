/* eslint-disable @next/next/no-img-element */
import {
  PlayIcon,
  CheckIcon,
  ThumbUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";

const Tours: React.FC = () => {
  return (
    <section className="h-screen bg-grayLight">
      <div className="px-24 py-36 grid grid-cols-5">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div
              key={index}
              className={`group  bg-[black] w-[15rem]  rounded-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-150`}
            >
              <div className="flex flex-col space-y-5 group-hover:space-y-2">
                <img src="/images/netflix.jpg" alt="" />
                <div className="hidden group-hover:inline-flex px-1 justify-between items-center ">
                  <div className="text-white items-center flex space-x-2">
                    <PlayIcon className="h-9" />
                    <CheckIcon className="h-8 bg-grayDark rounded-full px-2 py-2 border border-white" />
                    <ThumbUpIcon className="h-8 bg-grayDark rounded-full px-2 py-2 border border-white" />
                  </div>
                  <ChevronDownIcon className="h-8 bg-grayDark rounded-full px-2 py-2 border border-white text-white" />
                </div>
                <div className="hidden group-hover:inline-flex px-2 space-x-3">
                  <p className=" text-primary text-xs font-bold">98% Match</p>
                  <span className=" text-xs text-grayDark">Limited series</span>
                </div>
                <div className="hidden group-hover:inline-flex px-2 text-white pb-2 space-x-3">
                  <span className=" text-[0.50rem]">Action</span>
                  <span className=" text-[0.50rem] ">Drama</span>
                  <span className=" text-[0.50rem]">Drama</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
