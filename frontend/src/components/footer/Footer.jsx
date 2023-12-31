import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {RiLinkedinFill} from "react-icons/ri";
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from "react-icons/ai";
import "./Footer.css";

const SocialLinks = [
    {
        path: "https://innoskrit.in/",
        icon: <RiLinkedinFill className="w-[20px] h-[20px]"/>,
    },
    {
        path: "https://innoskrit.in/",
        icon: <AiFillGithub className="w-[20px] h-[20px]"/>,
    },
    {
        path: "https://innoskrit.in/",
        icon: <AiOutlineInstagram className="w-[20px] h-[20px]"/>,
    },
    {
        path: "https://innoskrit.in/",
        icon: <AiFillYoutube className="w-[20px] h-[20px]"/>,
    },
]

const QuickLinks = [
    {
      path:"/home",
      display:"Home"
    },{
      path:"/doctors",
      display:"Find a Doctor"
    },{
      path:"/services",
      display:"Services"
    },{
      path:"/contact",
      display:"Contact"
    }
]

const Footer = () => {
    return <footer className="p-7">
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between flex-wrap">
                <div>
                    <img src={logo} alt=""/>
                    <p className="text-textColor">Copyright 2023, developed by Prerna.</p>
                    <div className="flex flex-row gap-3 pt-5">
                        {
                            SocialLinks.map((link, index)=> {
                                return <NavLink to={link.path} key={index}
                                    className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font[600]":"text-textColor text-[16px] leading-7 font[500] hover:text-primaryColor"}>
                                        {link.icon}
                                </NavLink>
                            })
                        }
                    </div>
                </div>
                
                <div className="flex flex-col gap-2 pt-5 mr-24">
                    <h1 className="text-[20px] font-[700]">Quick Links</h1>
                    {
                        QuickLinks.map((link, index)=> {
                            return <NavLink to={link.path} key={index}
                                className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font[600]":"text-textColor text-[16px] leading-7 font[500] hover:text-primaryColor"}>
                                    {link.display}
                            </NavLink>
                        })
                    }
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;