import type { NextPage } from "next";
import { useRouter } from "next/router";
import About from "../components/About";
import Header from "../components/Header";
import Tours from "../components/Tours";
import Trillio from "../components/Trillio/Trillio";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      {/* <Header />
      <About />
      <Tours />
      <Trillio /> */}

      <div className="flex items-center justify-center h-screen">
        <button
          onClick={() => router.push("/create-room")}
          className=" bg-indigo-600 text-gray-100 px-10 py-3 rounded-sm"
        >
          create room
        </button>
      </div>
    </>
  );
};

export default Home;
