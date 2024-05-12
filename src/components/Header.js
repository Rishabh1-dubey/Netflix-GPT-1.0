import React from "react";
import items from "../items/Netflix_Logo_PMS.png";
const Header = () => {
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black  z-50 ">
      <img className="w-44 mx-auto md:mx-0" src={items} alt="Netflix logo" />
    </div>
  );
};

export default Header;
