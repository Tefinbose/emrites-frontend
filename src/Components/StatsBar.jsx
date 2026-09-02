const StatsBar = () => {
  return (
    <section className="bg-[#0b0b0b] px-10 py-8 text-white md:px-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

        <div>
          <h3 className="text-xl font-semibold text-[#d4af62]">
            Business Growth
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Professional solutions for your business.
          </p>

          <button className="mt-4 rounded border border-gray-500 px-4 py-2 text-sm">
            Learn more
          </button>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#d4af62]">
            Expert Support
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Guidance from experienced professionals.
          </p>

          <button className="mt-4 rounded border border-gray-500 px-4 py-2 text-sm">
            Learn more
          </button>
        </div>

        <div className="flex items-center justify-center rounded-2xl bg-[#f1eee9] p-5 text-black">
          <div>
            <p className="text-sm">Professionals</p>

            <h2 className="text-3xl font-bold">
              120+
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-2xl bg-[#c99b4a] p-5 text-black">
          <h2 className="text-xl font-semibold">
            Contact Us
          </h2>
        </div>

      </div>
    </section>
  );
};

export default StatsBar;