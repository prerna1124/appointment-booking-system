import {services} from "./../../assets/data/services";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-15 lg:gap-18 mt-20">
        {services.map((item, index)=> <ServiceCard item={item} index={index} key={item}/>)}
    </div>
}

export default ServiceList;