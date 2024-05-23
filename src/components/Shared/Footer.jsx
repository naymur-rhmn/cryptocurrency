import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-[#2A2AFF] to-[#550096] text-white">
      <div className="max-w-screen-lg mx-auto px-4 md:px-12 py-14">
        <div className="flex gap-10">
          <div className="w-2/6">
            <div className="mb-4">logo</div>
            <p className="text-base leading-[28px] mb-3">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Proin commodo
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-lead">
                <a href="mailto:">monnersupport@email.com0</a>
              </p>
              <p className="text-lead">
                <a href="tel:+">(+1) 123-123-123</a>
              </p>
              <p className="text-lead">
                275 Jimmy Way Copperopolis, California(CA), 95228
              </p>
            </div>
          </div>
          <div className="w-1/6">
            <h6 className="mb-4 font-bold text-2xl">Company</h6>
            <ul className="flex flex-col gap-3">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Prices Plans</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="w-3/6 pl-6">
            <h6 className="mb-4 font-bold text-2xl">Company</h6>
            <ul className="flex flex-col gap-3">
              <li className="border-b border-[#7246C8] lg:mr-12 pb-4">
                <p>Crypto PR: The good, the bad and the shoddy</p>
                <div>
                  <p className="text-sm text-[#AEADAD] font-bold">
                    Published on:{" "}
                    <span className="opacity-80"> June 10,2021</span>
                  </p>
                </div>
              </li>
              <li className="border-b border-[#7246C8] lg:mr-12 pb-4">
                <p>Crypto PR: The good, the bad and the shoddy</p>
                <p className="text-sm text-[#AEADAD] font-bold">
                  Published on:{" "}
                  <span className="opacity-80"> June 10,2021</span>
                </p>
              </li>
              <li>
                <p>Crypto PR: The good, the bad and the shoddy</p>
                <p className="text-sm text-[#AEADAD] font-bold">
                  Published on:{" "}
                  <span className="opacity-80"> June 10,2021</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
