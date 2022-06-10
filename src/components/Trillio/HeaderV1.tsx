/* eslint-disable @next/next/no-img-element */
import {
  BookmarkIcon,
  ChatIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useRef } from "react";

const HeaderV1: React.FC = () => {
  return (
    <header className="bg-[#fff] min-h-[7rem] flex items-center justify-between  border-b-2 border-gray-300 shadow-md">
      <img src="/images/two/logo.png" alt="logo" className="h-12 ml-6" />
      <form className="flex items-center justify-center flex-[0.4]">
        <input
          type="text"
          placeholder="Search Hotels"
          className="border py-1 px-5 text-sm transition-all m-[-2.5rem] outline-none duration-300 ease-in-out bg-gray-200 rounded-full w-[90%] focus:w-full focus:bg-gray-300"
        />
        <SearchIcon className="h-5 text-gray-600 bg-gray-300" />
      </form>
      <div className=" text-gray-600 flex items-center h-full">
        <div className="icon_container">
          <BookmarkIcon className="h-7" />
        </div>
        <div className="icon_container">
          <ChatIcon className="h-7" />
        </div>
        <div className="icon_container flex-1">
          <div className="flex items-center space-x-2">
            <UserIcon className="h-9 bg-gray-300 text-gray-600 px-2 py-2 rounded-full" />
            <span>Pavan</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderV1;
