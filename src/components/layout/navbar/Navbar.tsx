const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 mx-auto px-14 py-6 flex justify-between items-center z-[2] bg-white text-black">
      <div className="flex items-center space-x-5">
        <div className="rounded-full bg-blue-900 text-white h-10 w-10 flex justify-center items-center"></div>
        <span className="font-extrabold text-2xl">YPP Code</span>
      </div>
      <ul className="flex gap-6 justify-end">
        <li className="hover:border-b-2 hover:border-b-black">
          <a className="tracking-widest font-bold" href="">
            Home
          </a>
        </li>
        <li className="hover:border-b-2 hover:border-b-black">
          <a className="tracking-widest font-bold" href="">
            Experience
          </a>
        </li>
        <li className="hover:border-b-2 hover:border-b-black">
          <a className="tracking-widest font-bold" href="">
            About me
          </a>
        </li>
        <li className="hover:border-b-2 hover:border-b-black">
          <a className="tracking-widest font-bold" href="">
            Projects
          </a>
        </li>
        <li className="hover:border-b-2 hover:border-b-black">
          <a className="tracking-widest font-bold" href="">
            Skills
          </a>
        </li>
        <li className="hover:border-b-2 hover:border-b-black">
          <a className="tracking-widest font-bold" href="">
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
