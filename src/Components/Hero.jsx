import businessman from "../assets/businessman.png";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section  style={{
        backgroundImage:"url('https://i.pinimg.com/1200x/a6/cc/a4/a6cca4075e74c66dbb90a008dc9574cf.jpg')",
        backgroundPosition:'center',
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }} className="min-h-[700px] bg-[#e8e0d5] ">
      
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
          <span className="font-bold text-3xl">EMIRATES <br />CLASSIC</span>
         </div>

          {/* Heading */}
          <h1 className="text-5xl text-white leading-tight mt-3">
            Turn Your <span className="font-bold">Business</span>
            <br />
            Vision Into <span className="font-bold">Reality</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-md text-white text-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Turn your business ideas into reality with us.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 ">
            <button className="w-[160px] rounded-full md:rounded-xl bg-black text-white hover:border border-blue  shadow-blue-300 hover:font-extralight">
              Let's get started 
            </button>
             {/* <span className="inline-block transform -rotate-45">→</span> */}

            <button className="rounded-full md:rounded-xl bg-black  text-white px-6 py-3 hover:border border-blue shadow-blue-300 hover:font-extralight ">
              More info 
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-end justify-center">
          <img
            src={businessman}
            alt="Businessman"
            className="h-auto w-80% max-w-[600px] "
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;