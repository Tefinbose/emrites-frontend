import { useEffect, useState } from "react";
import { getAllEnquires } from "../services/allApi";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const email = sessionStorage.getItem("email");
  const role = sessionStorage.getItem("role");

  const getEnquires = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const result = await getAllEnquires(reqHeader);
    console.log(result);
    
    if (result.status == "200") {
      setEnquiries(result.data);
    }
  };
  useEffect(() => {
    getEnquires();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
             <th className="p-3 text-left">phone</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map((enquiry) => (
            <tr
              key={enquiry._id}
              className="border-b"
            >
              <td className="p-3">{enquiry.firstName}</td>

              <td className="p-3">{enquiry.email}</td>

              <td className="p-3">{enquiry.phone}</td>

              <td className="p-3">{enquiry.message}</td>

              <td className="p-3">
                <button
                  onClick={() =>
                    handleDelete(enquiry._id)
                  }
                  className="rounded bg-red-500 px-3 py-2 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
             ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
