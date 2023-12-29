/* eslint-disable react/prop-types */
import {BiChevronRightCircle} from "react-icons/bi";
import { Link } from "react-router-dom";

const ServiceCard = ({item, index}) => {
    const {name, desc, bgColor, textColor} = item;
    return <div>
        <h1 className="font-[400] text-[27px] text-headingColor">{name}</h1>
        <p className="text-textColor text-[20px]">{desc}</p>
        <div className="flex flex-row justify-between pt-5">
            <Link to="/doctors" className="jutify-center hover:text-blue-600 hover:border-none">
              <BiChevronRightCircle className="w-[35px] h-[35px]"></BiChevronRightCircle>
            </Link>
            <span className="w-[34px] items-center justify-center leading-10 pl-3" style={{background:`${bgColor}`, color:`${textColor}`, borderRadius:"6px 0 0 8px"}}>
                {index + 1}
            </span>
        </div>
    </div>
};

export default ServiceCard;