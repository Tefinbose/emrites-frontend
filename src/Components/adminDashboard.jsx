const AdminDashboard = () => {
  const email = sessionStorage.getItem("email");
  const role = sessionStorage.getItem("role");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="mt-6 rounded-lg bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">
          Welcome Admin 👋
        </h2>

        <p className="mt-3">
          Email: {email}
        </p>

        <p>
          Role: {role}
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;