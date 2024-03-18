import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    {
      label: "Home",
      link: "#home",
    },
    {
      label: "About me",
      link: "#aboutMe",
    },
    {
      label: "Experience",
      link: "#experience",
    },
    {
      label: "Projects",
      link: "#projects",
    },
    {
      label: "Skills",
      link: "#skills",
    },
    {
      label: "Contact me",
      link: "#contacMe",
    },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 mx-auto px-5 lg:px-14 py-3 lg:py-5 flex justify-between items-center z-[999] bg-white">
      <div className="flex items-center space-x-2 lg:space-x-5">
        <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-900 rounded-full"></div>
        <span className="text-h2 text-nowrap">YPP Code</span>
      </div>
      <ul className="justify-end hidden gap-3 lg:gap-6 md:flex">
        {navItems.map((item) => (
          <li className="">
            <a
              className="text-p text-nowrap after:absolute tracking-widest font-bold relative px-2 after:content-['']  after:bg-picton-blue-950 after:h-0.5 after:w-0 after:left-0 after:-bottom-2 after:hover:w-full after:duration-300 hover:text-picton-blue-950"
              href={item.link}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="block md:hidden">
        <BiMenu className="text-2xl" onClick={() => setShowMenu(true)} />
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } absolute top-0 bottom-0 min-h-screen right-0 pl-10 pr-5 w-1/2 py-9 z-10 bg-white`}
        >
          <IoMdClose
            onClick={() => setShowMenu(false)}
            className="ml-auto text-2xl"
          />
          <ul className="flex flex-col justify-end gap-6 font-poppins">
            {navItems.map((item) => (
              <li className="hover:border-b-2 hover:border-b-black">
                <a className="text-p text-nowrap" href={item.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
