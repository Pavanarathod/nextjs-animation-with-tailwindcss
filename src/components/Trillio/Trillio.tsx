import { HomeIcon } from "@heroicons/react/solid";
import sidebarData from "../../utils/sidebarData";
import HeaderV1 from "./HeaderV1";

const Trillio: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200">
      <HeaderV1 />
      <div className="flex w-full">
        <nav className="bg-gray-500 flex-[0.25] flex flex-col justify-between py-5">
          <ul className="flex flex-col space-y-3">
            {sidebarData.map(({ Icon, title, active }) => (
              <li
                key={title}
                // className="relative group"
                className={`relative group cursor-pointer before:content-[''] before:top-0 before:left-0 before:h-full before:w-1 before:bg-primary before:absolute  before:transition-all before:duration-300 before:delay-100 before:ease-in-out hover:before:w-full ${
                  active && "bg-primary"
                }`}
                style={{}}
              >
                <a
                  href="#"
                  className=" relative z-50 current-color uppercase flex items-center px-12 py-6 space-x-5 text-gray-100"
                >
                  <Icon className="h-7" />
                  <span>{title}</span>
                </a>
                {/* <div className="absolute h-full z-0 transition-all duration-500 delay-100 ease-in-out bg-primary top-0 w-1 group-hover:w-full"></div> */}
              </li>
            ))}
          </ul>

          <div className="text-center text-gray-100">
            &copy; 2022 by trillio. All right reserved
          </div>
        </nav>
        <main className="bg-[#fff] flex-1 h-[40rem]">Hotel view</main>
      </div>
    </div>
  );
};

export default Trillio;
