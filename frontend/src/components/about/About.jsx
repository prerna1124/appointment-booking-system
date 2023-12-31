import about from "./../../assets/images/about.png";
import aboutCard from "./../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return <>
        <section>
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between gap-[50px]">
                    {/* {======= ABOUT IMAGE =======} */}
                    <div className="relative w-3/4 lg:w-1/2 z-10">
                        <img src={about} alt=""></img>
                        <div className="absolute z-20 bottom-[0] left-60 w-1/2">
                            <img src={aboutCard} alt=""></img>
                        </div>
                    </div>
                    {/* {=========== ABOUT CONTENT =========} */}
                    <div className="flex flex-col w-full lg:w-1/2 xl:w-[670px]">
                        <h1 className="heading">Proud to be one of the nations best</h1>
                        <p className="text__para">Navigating the future of medicine, Artificial Intelligence in Medical Services (AIMS) stands as a transformative force in the healthcare landscape. As a doctor, the incorporation of AIMS into our practice enhances diagnostic precision, enables personalized treatment plans, and accelerates medical research. AIMS acts as a valued partner, not replacing human expertise but amplifying it. This synergy between human intuition and machine intelligence fosters efficiency, allowing us to focus more on direct patient care. In embracing AIMS, we embark on a journey toward a more precise, efficient, and patient-centric healthcare experience.</p>
                        <Link to="/doctors">
                            <button className="btn">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  </>
};

export default About