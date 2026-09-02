import businessman from "../assets/businessman.png";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/a6/cc/a4/a6cca4075e74c66dbb90a008dc9574cf.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-[700px] bg-[#e8e0d5] "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-10 md:px-20">
          {/* Logo */}
          <div className="hidden md:flex justify-center items-center text-white   ">
            <img
              src={logo}
              alt="Emirates Classic"
              className="w-[200px] mb-18 sm mt-3 brightness-125 drop-shadow-lg"
            />
            <span className="font-bold text-3xl text-black">
              EMIRATES <br />
              CLASSIC
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl text-black leading-tight mt-3">
            Turn Your <span className="font-bold">Business</span>
            <br />
            Vision Into <span className="font-bold">Reality</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-md text-black text-bold font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Turn your
            business ideas into reality with us.
          </p>

          {/* Buttons */}
        </div>

        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center justify-start">
          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 py-8">
            <button className="w-[160px] rounded-full bg-black px-4  py-2 text-white transition duration-300 hover:scale-105 hover:bg-[#c99b4a] hover:text-black">
              Let's get started
            </button>
            <button className=" flex h-10 w-10 items-center justify-center rounded-full text-white bg-black transition duration-300 hover:scale-105 hover:bg-[#c99b4a] hover:text-black">
              ↗
            </button>

            <button className="rounded-full border border-black bg-transparent px-4 py-2 text-black transition duration-300 hover:bg-black hover:text-white">
              More info
            </button>
          </div>

          {/* Businessman Image */}
          <div className="flex w-full justify-center">
            <img
              src={businessman}
              alt="Businessman"
              className="h-auto w-full max-w-[700px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
