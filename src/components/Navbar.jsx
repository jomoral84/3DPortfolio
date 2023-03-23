import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-3 h-3 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
    
            Jorge Morales
          </p>
          <p className="text-red-500">213</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
