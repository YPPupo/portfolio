import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    {
      label: "Home",
      link: "",
    },
    {
      label: "About me",
      link: "",
    },
    {
      label: "Experience",
      link: "",
    },
    {
      label: "Projects",
      link: "",
    },
    {
      label: "Skills",
      link: "",
    },
    {
      label: "Contact me",
      link: "",
    },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 mx-auto px-5 md:px-14 py-6 flex justify-between items-center z-[2] bg-white text-black">
      <div className="flex items-center space-x-5">
        <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-900 rounded-full"></div>
        <span className="text-2xl font-extrabold font-poppins">YPP Code</span>
      </div>
      <ul className="justify-end hidden gap-6 font-poppins md:flex">
        {navItems.map((item) => (
          <li className="">
            <a
              className="after:absolute tracking-widest font-bold relative leading-6 px-2 after:content-['']  after:bg-picton-blue-950 after:h-1 after:w-0 after:left-0 after:-bottom-2 after:hover:w-full after:duration-300 hover:text-picton-blue-950"
              href={item.link}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="block md:hidden">
        <BiMenu onClick={() => setShowMenu(true)} />
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } absolute top-0 bottom-0 min-h-screen right-0 pl-10 pr-5 w-1/2 py-9 z-10 bg-white`}
        >
          <IoMdClose onClick={() => setShowMenu(false)} className="ml-auto" />
          <ul className="flex flex-col justify-end gap-6 font-poppins">
            {navItems.map((item) => (
              <li className="hover:border-b-2 hover:border-b-black">
                <a className="font-bold tracking-widest" href={item.link}>
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
