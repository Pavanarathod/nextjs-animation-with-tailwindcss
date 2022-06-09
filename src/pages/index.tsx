import type { NextPage } from "next";
import About from "../components/About";
import Header from "../components/Header";
import Tours from "../components/Tours";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Tours />
    </>
  );
};

export default Home;
