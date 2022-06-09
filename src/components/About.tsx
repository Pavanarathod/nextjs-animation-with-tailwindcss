/* eslint-disable @next/next/no-img-element */
const About: React.FC = () => {
  return (
    <main className="my-28">
      <section className="flex flex-col space-y-20 px-16 py-10">
        <h2 className="uppercase text-3xl text-center">
          Exciting tours for adventurers
        </h2>

        <div className="grid grid-cols-2 gap-16 ">
          <div className="flex flex-col items-start space-y-14">
            <div className="flex flex-col space-y-3">
              <h1 className="text-grayDark uppercase font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className=" text-sm text-grayDark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                illo doloremque tenetur officiis quam culpa! Velit cupiditate
                adipisci expedita facere cumque, ratione similique provident
                repellat.adipisci expedita facere cumque, ratione similique
                provident repellat.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-grayDark uppercase font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-sm text-grayDark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                illo doloremque tenetur officiis quam culpa! Velit cupiditate
                adipisci expedita facere cumque, ratione similique provident
                repellat. adipisci expedita facere cumque, ratione similique
                provident repellat.
              </p>
            </div>
            <button className="text-white bg-primaryLight px-7 py-2 rounded-full">
              Learn more
            </button>
          </div>

          {/* IMAGES */}
          <div className="relative">
            <div>
              <img
                src="/images/nat-1-large.jpg"
                alt=""
                className="w-[55%] shadow-2xl absolute left-0 -top-8 transition-all duration-500 hover:scale-[1.05] hover:translate-y-[-.5rem] hover:z-50 cursor-pointer hover:outline hover:outline-[1rem] outline-primary hover:outline-offset-[1rem]"
              />
              <img
                src="/images/nat-2-large.jpg"
                alt=""
                className="w-[55%] shadow-2xl rounded-md absolute right-0 top-8 transition-all duration-500 hover:scale-[1.05] hover:z-50 cursor-pointer hover:outline hover:outline-[1rem] outline-primary hover:outline-offset-[1rem]"
              />
              <img
                src="/images/nat-3-large.jpg"
                alt=""
                className="w-[55%] shadow-2xl rounded-md absolute top-40 left-[20%] transition-all duration-500 hover:scale-[1.05] hover:z-50 cursor-pointer hover:outline hover:outline-[1rem] outline-primary hover:outline-offset-[1rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
