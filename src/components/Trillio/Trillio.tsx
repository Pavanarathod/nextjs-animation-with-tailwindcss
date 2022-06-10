import { HomeIcon } from "@heroicons/react/solid";
import sidebarData from "../../utils/sidebarData";
import HeaderV1 from "./HeaderV1";

const Trillio: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200">
      <HeaderV1 />
      <div className="flex w-full">
        <nav className="bg-gray-500 flex-[0.25] h-screen">
          <ul>
            {sidebarData.map(({ Icon, title }) => (
              <li key={title}>
                <a href="#">
                  <Icon className="h-7" />
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>

          <div>&copy; 2022 by trillio. All right reserved</div>
        </nav>
        <main className="bg-[#fff] flex-1">Hotel view</main>
      </div>
    </div>
  );
};

export default Trillio;
