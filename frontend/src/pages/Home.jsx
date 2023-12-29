import { Link } from "react-router-dom";
import heroImg01 from "./../assets/images/hero-img01.png";
import heroImg02 from "./../assets/images/hero-img02.png";
import heroImg03 from "./../assets/images/hero-img03.png";
import icon01 from "./../assets/images/icon01.png";
import icon02 from "./../assets/images/icon02.png";
import icon03 from "./../assets/images/icon03.png";
import About from "../components/about/About";
import Services from "../pages/Services";

import { BiChevronRightCircle } from "react-icons/bi";

const Home = () => {
  return (
    <>
    {/* ========= Hero Section Starts======== */}
    <section className="hero__Section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* ============ Hero Content ============= */}
          <div className="lg:w-[600px]">
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
        <div className="flex items-center flex-col lg:flex-row pt-20 gap-[90px]">
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

    </>
  );
};

export default Home;