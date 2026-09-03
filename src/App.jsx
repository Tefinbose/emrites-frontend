import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

import ServicesPreview from "./Components/ServicesPreview";
import AboutSection from "./Components/AboutSection";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminDashboard from "./Components/adminDashboard";




function App() {
  return (
    <>
      <BrowserRouter>
        <main className="min-h-screen overflow-x-hidden">
          <div className=" mx-auto shadow-2xl">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPreview />} />
              <Route path="/about" element={<AboutSection/>} />
              <Route path="/insights" element={<ServicesPreview />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/admin-Dashboard" element={<AdminDashboard/>} />
              
              

            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
