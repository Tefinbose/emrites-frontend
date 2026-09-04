import { Link } from "react-router-dom";

import businessman from "../assets/businessman2.png";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      className="
        min-h-[700px]
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Light Overlay */}
      <div className="min-h-[700px] bg-white/65">
        <div
          className="
            grid
            min-h-[700px]
            grid-cols-1
            md:grid-cols-2
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              flex
              flex-col
              
              px-8
              py-12
              md:px-15
              lg:px-28
            "
          >
            {/* LOGO */}
            <div
              className="
                mb-10
                hidden
                items-center
                gap-4
                md:flex
              "
            >
              <img
                src={logo}
                alt="Emirates Classic"
                className="
                  h-32
                  w-32
                  object-contain
                  brightness-125
                  drop-shadow-lg
                "
              />

              <h2 className="text-3xl font-bold leading-tight text-[#111]">
                EMIRATES
                <br />
                CLASSIC
              </h2>
            </div>

            {/* HEADING */}
            <h1
              className="
    text-4xl
    font-light
    leading-[0.9]
    text-[#111]
    sm:text-5xl
    lg:text-5xl
  "
            >
              Turn Your <span className="font-bold">Business</span>
              <br />
             
            </h1>
            <h1
              className="
                text-4xl
                font-light
                leading-tight
                text-[#111]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Vision Into <span className="font-bold">Reality</span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
               text-sm sm:text-base md:text-lg lg:text-lg mt-4
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Turn
              br\your business ideas into reality with us.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              flex flex-col items-center px-6 pt-5 md:px-10
            "
          >
            {/* TOP BUTTONS */}
            <div
              className="
               flex w-full flex-wrap items-center justify-center gap-3
              "
            >
              {/* LET'S GET STARTED */}
              <Link
                to="/contact"
                className="
                  rounded-md
                 bg-[#183247]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition
                  duration-300
                  hover:scale-105
                  hover:bg-[#c99b4a]
                  hover:text-black
                "
              >
                Let's get started
              </Link>

              {/* ARROW */}
              <Link
                to="/contact"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                 bg-[#183247]
                  text-white
                  transition
                  hover:scale-110
                  hover:bg-[#c99b4a]
                  hover:text-black
                "
              >
                ↗
              </Link>

              {/* MORE INFO */}
              <Link
                to="/about"
                className="
                  rounded-md
                  border
                  border-black
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >
                More info
              </Link>
            </div>

            {/* BUSINESSMAN */}
            <div
              className="
                flex
                flex-1
                items-end
                justify-center
              "
            >
              <img
                src={businessman}
                alt="Businessman"
                className="
                  mt-8
                  h-auto
                  w-full
                  
                  max-w-[400px]
                  object-contain
                  md:max-w-[500px]
                  
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
