import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import patientAvatar from "../../assets/images/patient-avatar.png";
import {HiStar} from "react-icons/hi";
import "./Testimonial.css"

const Testimonial = () => {
    return <div className="mt-[30px] lg:mt-[55px]">
        <Swiper 
            modules={[Pagination]} 
            spaceBetween={30}
            slidesPerView={1}
            pagination={{clickable : true}}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }}>

            <SwiperSlide>
                <div className="flex flex-col rounded-sm p-2">
                    <div className="flex flex-row items-center">
                        <img src={patientAvatar} alt="" />
                        <div className="flex flex-col px-2">
                            <div><h1>Muhibur Rahman</h1></div>
                            <div className="flex items-center">
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                            </div>
                        </div>
                    </div>
                    <p>"I have taken medical services from them. They treat so well and they provide the best medical services."</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex flex-col rounded-sm p-2">
                    <div className="flex flex-row items-center">
                        <img src={patientAvatar} alt="" />
                        <div className="flex flex-col px-2">
                            <div><h1>Muhibur Rahman</h1></div>
                            <div className="flex items-center">
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                            </div>
                        </div>
                    </div>
                    <p>"I have taken medical services from them. They treat so well and they provide the best medical services."</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex flex-col rounded-sm p-2">
                    <div className="flex flex-row items-center">
                        <img src={patientAvatar} alt="" />
                        <div className="flex flex-col px-2">
                            <div><h1>Muhibur Rahman</h1></div>
                            <div className="flex items-center">
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                            </div>
                        </div>
                    </div>
                    <p>"I have taken medical services from them. They treat so well and they provide the best medical services."</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex flex-col rounded-sm p-2">
                    <div className="flex flex-row items-center">
                        <img src={patientAvatar} alt="" />
                        <div className="flex flex-col px-2">
                            <div><h1>Muhibur Rahman</h1></div>
                            <div className="flex items-center">
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                            </div>
                        </div>
                    </div>
                    <p>"I have taken medical services from them. They treat so well and they provide the best medical services."</p>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="flex flex-col rounded-sm p-2">
                    <div className="flex flex-row items-center">
                        <img src={patientAvatar} alt="" />
                        <div className="flex flex-col px-2">
                            <div><h1>Muhibur Rahman</h1></div>
                            <div className="flex items-center">
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                                <HiStar className=" text-yellow-400"/>
                            </div>
                        </div>
                    </div>
                    <p>"I have taken medical services from them. They treat so well and they provide the best medical services."</p>
                </div>
            </SwiperSlide>

        </Swiper>
    </div>
};

export default Testimonial;