import type { NextPage } from "next";
import About from "../components/About";
import Header from "../components/Header";
import Tours from "../components/Tours";
import Trillio from "../components/Trillio/Trillio";

const Home: NextPage = () => {
  return (
    <>
      {/* <Header />
      <About />
      <Tours /> */}
      <Trillio />
    </>
  );
};

export default Home;
