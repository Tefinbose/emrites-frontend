import { useState } from "react";
import { createEnquiryApi, loginApi } from "../services/allApi";


const ContactSection = () => {
const [formData, setFormData] = useState({
   firstName: "",
   lastName:"",
    email: "",
    phone: "",
    message: "",
  });
console.log(formData);
const {firstName,lastName,email,phone,message}=formData

const creatEnquiry = async(e)=>{
  e.preventDefault()
  const result = await createEnquiryApi({firstName,lastName,email,phone,message})
  console.log(result.data);
  

}

 
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
             onChange={(e)=>{setFormData({...formData,firstName:e.target.value})}}
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
            onChange={(e)=>{setFormData({...formData,lastName:e.target.value})}}
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
             onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
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
             onChange={(e)=>{setFormData({...formData,phone:e.target.value})}}
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
           onChange={(e)=>{setFormData({...formData,message:e.target.value})}}
            rows="5"
            placeholder="Any Additional Message..."
            className="w-full resize-none rounded-lg bg-[#eee8df] px-5 py-4 outline-none"
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