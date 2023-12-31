import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Services from "../pages/Services";
import Doctor from "../pages/doctor/Doctor";
import DoctorInfo from "../pages/doctor/DoctorInfo";

import {Route, Routes} from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="services" element={<Services />} />
      <Route path="/doctors" element={<Doctor />} />
      <Route path="/doctors/:id" element={<DoctorInfo />} />
    </Routes>
  );
};

export default Routers;