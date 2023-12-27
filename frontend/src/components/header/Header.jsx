import {useEffect, useRef} from 'react';

import logo from "../../assets/images/logo.png";
import userImage from "../../assets/images/avatar-icon.png"
import {NavLink, Link} from "react-router-dom";
import {BiMenu} from "react-icons/bi";

const navLinks = [
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

const Header = () => {
  return (
    <header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between cursor-auto'>
          {/* ========= logo =========== */}
          <div>
            <img src = {logo} alt = "" />
          </div>
          {/* ========= menu =========== */}
          <div className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((navLinkInfo, index) => {
                  return <li key={index}>
                    <NavLink to={navLinkInfo.path}
                            className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font[600]":"text-textColor text-[16px] leading-7 font[500] hover:text-primaryColor"}
                    >{navLinkInfo.display}</NavLink>
                  </li>
                })
              }
            </ul>
          </div>
          {/* ========= nav right =========== */}
          <div className='nav-right flex items-center gap-4'>
              <div className='hidden'>
                <Link to="/">
                  <figure className='w-[35px] h-[35px] rounded-full'>
                    <img src={userImage} alt='' />
                  </figure>
                </Link>
              </div>
            
            {/* ========= login =========== */}
              <Link to="/login">
                <button className='bg-primaryColor px-2 text-white rounded-2xl my-2'>
                  Login
                </button>
              </Link>

              <span className='hidden'>
                <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
              </span>

            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;