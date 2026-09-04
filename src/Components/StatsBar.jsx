import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
FontAwesomeIcon;

const StatsBar = () => {
  return (
    <section className="bg-[#183247] px-10 py-8 text-white md:px-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold text-[#d4af62]">
            Business Growth
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Professional solutions for your business.
          </p>

          <div className="flex justify-start items-center gap-3 mt-4">
            <button className=" rounded border border-gray-500 px-4 py-2 text-sm">
              Learn more
            </button>
            <button className=" flex h-8 w-8 items-center justify-center rounded-full text-black bg-white transition duration-300 hover:scale-105 hover:bg-[#c99b4a] hover:text-black">
              ↗
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#d4af62]">
            Expert Support
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Guidance from experienced professionals.
          </p>

          <div className="flex justify-start items-center gap-3 mt-4">
            <button className=" rounded border border-gray-500 px-4 py-2 text-sm">
              Learn more
            </button>
            <button className=" flex h-8 w-8 items-center justify-center rounded-full text-black bg-white transition duration-300 hover:scale-105 hover:bg-[#c99b4a] hover:text-black">
              ↗
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-2xl bg-[#f1eee9] p-5 text-black">
          <div className="flex items-center justify-between rounded-3xl bg-[#f1efeb] px-8 py-6">
            {/* Left Side */}
            <div>
              <p className="text-lg text-gray-700">Professionals</p>

              <h2 className="text-4xl font-bold text-black">120+</h2>
            </div>

            {/* Right Side Profiles */}
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Professional"
                className="h-12 w-12 rounded-full border-2 border-white object-cover"
              />

              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Professional"
                className="-ml-3 h-12 w-12 rounded-full border-2 border-white object-cover"
              />

              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Professional"
                className="-ml-3 h-12 w-12 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center  gap-2 rounded-2xl bg-[#c99b4a] p-3 text-black sm:gap-3 sm:p-4 md:flex-col md:p-5 lg:flex-row lg:gap-3.5">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-6xl text-white"
          />
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
