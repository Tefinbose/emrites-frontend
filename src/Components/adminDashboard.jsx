import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteEnquiriesApi,
  getAllEnquires,
} from "../services/allApi";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const navigate = useNavigate();

  const getEnquires = async () => {
    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getAllEnquires(reqHeader);

      console.log(result);

      if (result.status === 200) {
        setEnquiries(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnquires();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await deleteEnquiriesApi(id, reqHeader);

      if (result.status === 200) {
        setEnquiries((prevEnquiries) =>
          prevEnquiries.filter(
            (enquiry) => enquiry._id !== id
          )
        );

        alert("Enquiry deleted successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage customer enquiries
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Logout
        </button>
      </div>

      {/* Enquiry Cards */}
      {enquiries.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          
          {enquiries.map((enquiry) => (
            <div
              key={enquiry._id}
              className="rounded-xl bg-white p-5 shadow-md transition duration-300 hover:shadow-xl"
            >
              {/* Name */}
              <div className="mb-4">
                <p className="text-xs text-gray-400">
                  Name
                </p>

                <h2 className="text-lg font-semibold text-gray-900">
                  {enquiry.firstName} {enquiry.lastName}
                </h2>
              </div>

              {/* Email */}
              <div className="mb-3">
                <p className="text-xs text-gray-400">
                  Email
                </p>

                <p className="break-all text-sm text-gray-700">
                  {enquiry.email}
                </p>
              </div>

              {/* Phone */}
              <div className="mb-3">
                <p className="text-xs text-gray-400">
                  Phone
                </p>

                <p className="text-sm text-gray-700">
                  {enquiry.phone}
                </p>
              </div>

              {/* Message */}
              <div className="mb-5">
                <p className="text-xs text-gray-400">
                  Message
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  {enquiry.message}
                </p>
              </div>

              {/* Delete */}
              <button
                onClick={() => handleDelete(enquiry._id)}
                className="w-full rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Delete Enquiry
              </button>
            </div>
          ))}

        </div>
      ) : (
        <div className="rounded-xl bg-white p-8 text-center shadow">
          <p className="text-gray-500">
            No enquiries available.
          </p>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;