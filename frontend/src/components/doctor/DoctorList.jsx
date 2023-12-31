import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard.jsx"

const DoctorList = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-15 lg:gap-18 mt-20">
    {doctors.map((item, index) => <DoctorCard doctor={item} key={index} />)}
  </div>
};

export default DoctorList;