import { useState } from "react";
import { createEnquiryApi, loginApi } from "../services/allApi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  console.log(formData);
  const { firstName, lastName, email, phone, message } = formData;

 const creatEnquiry = async (e) => {
  e.preventDefault();

  try {
    const result = await createEnquiryApi(formData);

    if (result.status === 201 || result.status === 200) {
      alert("Enquiry submitted successfully");

      // Clear all input fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
  return (
    <section className="bg-[#183247] px-10 py-16 md:px-20">
      <form className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label className="mb-2 block text-white">First Name</label>

            <input
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
              value={formData.firstName}
              type="text"
              placeholder="Enter First Name"
              className="w-full rounded-lg bg-[#c99b4a] px-5 py-4 outline-none  placeholder:text-white"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-2 block text-white">Last Name</label>

            <input
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
              value={formData.lastName}
              type="text"
              placeholder="Enter Last Name"
              className="w-full rounded-lg bg-[#c99b4a] px-5 py-4 outline-none  placeholder:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-white">Email Address</label>

            <input
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              value={formData.email}
              type="email"
              placeholder="Enter Email Address"
              className="w-full rounded-lg bg-[#c99b4a] px-5 py-4 outline-none placeholder:text-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-white">Phone Number</label>

            <input
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
              value={formData.phone}
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full rounded-lg bg-[#c99b4a] px-5 py-4 outline-none  placeholder:text-white"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="mb-2 block text-white">Message</label>

          <textarea
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
            value={fo}
            rows="5"
            placeholder="Any Additional Message..."
            className="w-full resize-none rounded-lg bg-[#c99b4a] px-5 py-4 outline-none  placeholder:text-white"
          />
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={creatEnquiry}
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
