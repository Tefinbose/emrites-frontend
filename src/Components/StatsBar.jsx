import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatsBar = () => {
  return (
    <section className="bg-[#183247] px-6 py-8 text-white sm:px-10 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {/* Business Growth */}
        <div>
          <h3 className="text-lg font-semibold text-[#d4af62] sm:text-xl">
            Business Growth
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Professional solutions for your business.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-start gap-3">
            <button className="rounded border border-gray-500 px-4 py-2 text-sm">
              Learn more
            </button>
            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black transition duration-300 hover:scale-105 hover:bg-[#c99b4a] hover:text-black">
              ↗
            </button>
          </div>
        </div>

        {/* Expert Support */}
        <div>
          <h3 className="text-lg font-semibold text-[#d4af62] sm:text-xl">
            Expert Support
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Guidance from experienced professionals.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-start gap-3">
            <button className="rounded border border-gray-500 px-4 py-2 text-sm">
              Learn more
            </button>
            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black transition duration-300 hover:scale-105 hover:bg-[#c99b4a] hover:text-black">
              ↗
            </button>
          </div>
        </div>

        {/* Professionals Card */}
        <div className="flex w-full items-center justify-between rounded-2xl bg-[#f1efeb] px-4 py-3 sm:px-6 sm:py-4">
          <div>
            <p className="text-xs text-gray-700 sm:text-sm">Professionals</p>
            <h2 className="text-lg font-bold text-black sm:text-2xl">120+</h2>
          </div>

          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Professional"
              className="h-7 w-7 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Professional"
              className="-ml-2 h-7 w-7 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
            />
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Professional"
              className="-ml-2 h-7 w-7 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
            />
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex min-h-[64px] items-center justify-center rounded-2xl bg-[#c99b4a] p-3 text-black sm:p-4 md:p-5">
          <h2 className="whitespace-nowrap text-base font-semibold text-white sm:text-lg lg:text-xl">
            Contact Us
          </h2>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;