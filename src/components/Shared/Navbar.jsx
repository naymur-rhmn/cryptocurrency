import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blueDark h-[90px] w-full text-white">
      <div className="max-w-screen-lg mx-auto px-4 md:px-12 h-full">
        <div className="flex justify-between items-center h-full">
          <div>Logo</div>
          <ul className="flex items-center gap-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contuct Us</li>
            <li>login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
