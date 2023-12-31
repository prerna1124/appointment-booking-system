import { Link } from "react-router-dom";
import heroImg01 from "./../assets/images/hero-img01.png";
import heroImg02 from "./../assets/images/hero-img02.png";
import heroImg03 from "./../assets/images/hero-img03.png";
import icon01 from "./../assets/images/icon01.png";
import icon02 from "./../assets/images/icon02.png";
import icon03 from "./../assets/images/icon03.png";
import About from "../components/about/About";
import Services from "../pages/Services";
import featureImage from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarImg from "../assets/images/avatar-icon.png";
import faqImage from "../assets/images/faq-img.png";

import { BiChevronRightCircle } from "react-icons/bi";
import DoctorList from "../components/doctor/DoctorList";
import FaqList from "../components/faq/FaqList";
import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
    {/* ========= Hero Section Starts======== */}
    <section className="hero__Section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* ============ Hero Content ============= */}
          <div className="lg:w-[550px]">
            <h1 className="text-[30px] text-headingColor font-[700] md:text-[40px]">We help patients <br/>live a healthy,<br/> longer life</h1>
            <p className="text__para">Lorem ipsum dolor sit amet, consectetur <br/>
            adipisicing elit. Velit quisquam ipsum obcaecati? Aperiam <br/>
            quis quidem labore corrupti quos. Quia tempora omnis soluta <br/>
            doloribus suscipit deserunt perferendis incidunt temporibus <br/>
            accusamus repellendus.</p>
            <button className="btn">Book an Appointement</button>
            <div className='hero__counter mt-[30px] flex flex-col lg:flex-row gap-5 lg:gap-[30px]'>
              <div>
                <h2 className="font-[700] text-[30px]">30+</h2>
                <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"></span>
                <p className="text__para">Year of Experiance</p>
              </div>
              <div>
                <h2 className="font-[700] text-[30px]">15+</h2>
                <span className="w-[100px] h-2 bg-violet-700 rounded-full block mt-[-14px]"></span>
                <p className="text__para">Clinic Location</p>
              </div>
              <div>
                <h2 className="font-[700] text-[30px]">100%</h2>
                <span className="w-[100px] h-2 bg-emerald-600 rounded-full block mt-[-14px]"></span>
                <p className="text__para">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        <div className="flex flex-col lg:flex-row md:gap-[90px] items-center justify-between">
          <img src={heroImg01} alt="" className="h-[400px]"></img>
          <div className="mt-[10px]">
            <img src={heroImg02} alt="" className="h-[280px] mb-[30px]"></img>
            <img src={heroImg03} alt="" className="h-[250px]"></img>
          </div>
        </div>
      </div>
      </div>
    </section>
    {/* ========= Hero Section Ends======== */}
    {/* ========= Services Section Starts======== */}
    <section >
      <div className="container">
        <div className="text-center">
          <h2 className="heading"> Providing the best medical services</h2>
          <p className="text__para">World-class care for everyone. Our health
          system offers unmatched, expert health care.</p>
        </div>
        <div className="flex items-center flex-col lg:flex-row gap-[90px]">
          <div>
            <img src={icon01} alt="" className="px-[100px]"></img>
            <h4 className="text-center text-[20px] font-[500] mt-5">Find a Doctor</h4>
            <p className="service__para">World-class care for everyone. Our health
          system offers unmatched, expert health care.</p>
            <Link to="/doctors" className="jutify-center hover:text-blue-600 hover:border-none">
              <BiChevronRightCircle className="w-[35px] h-[35px]"></BiChevronRightCircle>
            </Link>
          </div>
          <div>
            <img src={icon02} alt="" className="px-[100px]"></img>
            <h4 className="text-center text-[20px] font-[500] mt-5">Find a Location</h4>
            <p className="service__para">World-class care for everyone. Our health
          system offers unmatched, expert health care.</p>
            <Link to="/doctors" className="jutify-center hover:text-blue-600 hover:border-none">
              <BiChevronRightCircle className="w-[35px] h-[35px]"></BiChevronRightCircle>
            </Link>
          </div>
          <div>
            <img src={icon03} alt="" className="px-[100px]"></img>
            <h4 className="text-center text-[20px] font-[500] mt-5">Book Appointment</h4>
            <p className="service__para">World-class care for everyone. Our health
          system offers unmatched, expert health care.</p>
            <Link to="/doctors" className="jutify-center hover:text-blue-600 hover:border-none">
              <BiChevronRightCircle className="w-[35px] h-[35px]"></BiChevronRightCircle>
            </Link>
          </div>

        </div>
      </div>
    </section>
    {/* ========= Services Section Ends======== */}
    {/* ========= About Section Starts======== */}
    <section>
      <About/>
    </section>
    {/* ========= About Section Ends======== */}
    
    {/* ========= Services Section Starts======== */}
    <section>
      <Services />
    </section>
    {/* ========= Services Section Ends======== */}

    {/* ========= Features Section Starts======== */}
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-44 lg:gap-96">
          <div className="flex flex-col w-auto lg:w/2 gap-8">
            <h1 className="heading">Get virtual treatment anytime</h1>
            <ol className="list-decimal text-textColor pl-6">
              <li>Schedule the appointement directly</li>
              <li>Search for your physicians here, and contact their office</li>
              <li>View our physicians who are accepting new patients, use the online scheduling tool to select an appointement time.</li>
            </ol>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
          <div className="imageSection flex flex-col lg:flex-row relative z-10 lg:w-1/2 justify-end">
            <img src={featureImage} alt=""/>
            <div className="lg:w-[350px] absolute z-20 bottom-[100px] left-0">
              <div className="flex flex-col bg-white rounded-md px-3 lg:w-1/2 h-3/4">
                <div className="flex flex-row justify-between">
                  <p>Tue, 24</p>
                  <p className="text-textColor">10:00AM</p>
                  <span className="flex items-center z-30 w-6 justify-center bg-yellow-500 rounded-md">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="h-4 w-20 bg-cyan-200 text-cyan-600 py-1 text-[8px] lg:text-[10px] leading-[8px] mt-3 rounded-md text-center">
                  Consultaion
                </div>

                <div className="flex flex-row pt-3 gap-3">
                  <img src={avatarImg} alt = ""/>
                  <h1>Wayne Collins</h1>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ========= Features Section Ends======== */}

    {/* ========= Our Great Doctors======== */}
    <section>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col text-center">
            <div className="flex flex-col">
              <h1 className="heading">Meet our Doctors</h1>
              <p>World-class care for everyone. Our health System offers unmatched expert health care.</p>
            </div>
          </div>
            <DoctorList />
        </div>
      </div>
    </section>
    {/* ========= Doctors Section Ends======== */}

    {/* ========= Faq Section Starts======== */}
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src={faqImage} alt="" className="w-[350px]"/>
          </div>
          <div className="mt-20 flex flex-col lg:w-1/2">
            <h1 className="font-[500] text-[34px] pb-6">Most questions by our beloved patients</h1>
            <FaqList />
          </div>
        </div>
      </div>
    </section>
    {/* ========= Faq Section Ends======== */}

    {/* =========== Testimonial starts */}
    <section>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col text-center">
            <div className="flex flex-col">
              <h1 className="heading">What out patient say</h1>
              <p>World-class care for everyone. Our health System offers unmatched expert health care.</p>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
    </section>
    {/* =========== Testimonial starts */}
    </>
  );
};

export default Home;