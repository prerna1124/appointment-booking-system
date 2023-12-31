/* eslint-disable react/prop-types */
import { BiChevronRightCircle } from "react-icons/bi";
import Star from "../../assets/images/Star.png";
import { Link } from "react-router-dom";

const DoctorCard = ({doctor}) => {
    const {id, name, specialty, avgRating, totalRating, photo, totalPatient, hospital} = doctor;
  return <div className='flex flex-col'>
        <div >
            <img src={photo} alt='' className="w-full"/>
        </div>
        <div className='pl-2 pt-2'>
            <h1 className='font-[500] text-[20px]'>{name}</h1>
        </div>
        <div className='pl-2 pt-2 flex flex-row justify-between'>
            <div className='w-24 bg-teal-100 text-center text-[12px] rounded-sm pt-1.5'>
                <p className>{specialty}</p>
            </div>
            <div className='pl-2 pt-2 flex flex-row justify-between gap-1'>
                <img src={Star} className="h-[20px]"/>
                <p className="text-[16px]">{avgRating}</p>
                <p className="text-[16px] text-textColor">({totalRating})</p>
            </div>
        </div>
        <div className='pl-2 pt-2 flex flex-row justify-between'>
            <p className="text-textColor text-[10px]"> {hospital}</p>
            <Link to="/doctors/`${id}`" className="jutify-center hover:text-blue-600 hover:border-none">
              <BiChevronRightCircle className="w-[35px] h-[35px]"></BiChevronRightCircle>
            </Link>
        </div>
    </div>
};

export default DoctorCard