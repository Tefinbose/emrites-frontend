const AboutSection = () => {
  return (
    <section className="bg-[#f1ece4] px-10 py-20 md:px-20">

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

        {/* Left */}
        <div>
          <button className="rounded-md border border-black px-5 py-2">
            Who we are
          </button>

          <h2 className="mt-8 text-4xl font-light leading-tight text-black md:text-5xl">
            Turn Your
            <span className="font-bold"> Business</span>
            <br />
            Vision Into
            <span className="font-bold"> Reality</span>
          </h2>

          <div className="mt-8 flex gap-4 ">
            <button className="rounded-lg bg-[#183247] px-6 py-3 text-white">
              Learn More
            </button>
            {/* ARROW */}
              <button
                to="/contact"
                className="
                  flex
                  h-12
                  w-12
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
              </button>

            <button className="rounded-lg border border-black px-6 py-3">
              Gallery
            </button>
          </div>
        </div>

     {/* Right */}
<div className="flex flex-col justify-center px-2 sm:px-4 md:px-0">
  
  <div className="mb-5 flex gap-3 text-sm sm:gap-4 md:text-base">
    <span className="border-b-2 border-black">01</span>
    <span>02</span>
    <span>03</span>
  </div>

  <p className="max-w-lg text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed diam nonummy nibh euismod tincidunt ut laoreet dolore
    magna aliquam erat volutpat.
  </p>

</div>
      </div>

    </section>
  );
};

export default AboutSection;