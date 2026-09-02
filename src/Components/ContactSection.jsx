const ContactSection = () => {
  return (
    <section className="bg-[#111111] px-10 py-16 md:px-20">

      <form className="mx-auto max-w-4xl">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* First Name */}
          <div>
            <label className="mb-2 block text-white">
              First Name
            </label>

            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full rounded-lg bg-[#eee8df] px-5 py-4 outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-2 block text-white">
              Last Name
            </label>

            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full rounded-lg bg-[#eee8df] px-5 py-4 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-white">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full rounded-lg bg-[#eee8df] px-5 py-4 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-white">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full rounded-lg bg-[#eee8df] px-5 py-4 outline-none"
            />
          </div>

        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="mb-2 block text-white">
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Any Additional Message..."
            className="w-full resize-none rounded-lg bg-[#eee8df] px-5 py-4 outline-none"
          />
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-[#c99b4a] px-8 py-3 text-white"
          >
            Send Message
          </button>
        </div>

      </form>

    </section>
  );
};

export default ContactSection;