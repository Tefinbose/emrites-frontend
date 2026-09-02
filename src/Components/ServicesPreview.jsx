const services = [
  {
    title: "Business Setup",
    description: "Professional support to start and grow your business.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "Typing Services",
    description: "Fast and reliable documentation services.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    title: "Business Consulting",
    description: "Expert advice and solutions for your company.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-[#f1ece4] px-10 py-16 md:px-20">

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

        <div>
          <button className="rounded-md border border-black px-5 py-2">
            Services
          </button>

          <h2 className="mt-5 text-4xl font-light text-black">
            Turn Your
            <span className="font-bold"> Business</span>
            <br />

            Vision Into
            <span className="font-bold"> Reality</span>
          </h2>
        </div>

        <button className="rounded-lg bg-black px-6 py-3 text-white">
          Learn More
        </button>

      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">

        {services.map((service, index) => (
          <div 
            key={index}
            className="rounded-xl bg-[#111111] p-5 text-white"
          >
            {/* Placeholder Image */}
            
               <img src={service.image} alt=""  className="rounded"/>

            <h3 className="mt-5 text-xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-3 text-sm text-white">
              {service.description}
            </p>

            <button className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#c99b4a] text-black">
              ↗
            </button>
          </div>
        ))}

      </div>

    </section>
  );
};

export default ServicesPreview;