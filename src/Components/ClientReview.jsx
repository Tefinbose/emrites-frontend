const reviews = [
  {
    name: "Angel Maria",
    company: "Company Name",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    name: "De Paul",
    company: "Company Name",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    name: "Johny Antony",
    company: "Company Name",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

const ClientReview = () => {
  return (
    <section className="bg-[#e8edf2] px-6 py-12 md:px-16 lg:px-28">
      
      {/* Top Section */}
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        
        {/* Client Review */}
        <button className="w-fit rounded-2xl border border-[#183247] px-5 py-2 text-2xl font-semibold text-[#183247]">
          Client review
        </button>

        {/* Show More */}
        <div className="flex items-center gap-3">
          
          <button className="rounded-2xl bg-[#183247] px-6 py-3 font-semibold text-white transition hover:scale-105">
            Show More
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#183247] text-2xl text-white transition hover:scale-110">
            →
          </button>

        </div>

      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative mt-8 rounded-[28px] bg-[#deddd7] px-7 pb-6 pt-12 shadow-sm"
          >
            
            {/* Client Image */}
            <img
              src={review.image}
              alt={review.name}
              className="absolute -top-10 left-8 h-20 w-20 rounded-full border-4 border-[#e8edf2] object-cover"
            />

            {/* Review */}
            <p className="text-base leading-6 text-gray-600">
              {review.review}
            </p>

            {/* Divider */}
            <div className="my-2 border-t border-gray-400"></div>

            {/* Bottom */}
            <div className="flex items-end justify-between">
              
              <div>
                <h3 className="font-bold text-[#283747]">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {review.company}
                </p>
              </div>

              {/* Stars */}
              <div className="flex text-xl text-orange-500">
                ★★★★★
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ClientReview;