import { Link } from "react-router-dom";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const navValues = [
  {
    key: "nav1",
    name: "HOME",
    src: "/",
  },
  {
    key: "nav2",
    name: "ABOUT US",
    src: "/about",
  },
  {
    key: "nav3",
    name: "TEAM",
    src: "/team",
  },
  {
    key: "nav4",
    name: "PROJECTS",
    src: "/projects",
  },
];

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [contactHover, setContactHover] = useState(false);
  const [nav, setNav] = useState(false);

  function handleContactHover() {
    setContactHover((c) => !c);
  }

  function handleNav() {
    setNav((c) => !c);
  }

  useEffect(() => {
    setCurrentPage(window.location.pathname);
    console.log(currentPage);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 hidden h-20 items-center justify-between px-8 py-2 backdrop-blur-sm lg:flex">
        <div className="flex w-40 items-center justify-center text-white">
          Logo Here
        </div>
        <div className="flex h-16 items-center justify-center gap-2 rounded-full border-[1px] border-neutral-800 bg-neutral-950 p-2">
          {navValues.map((item, index) => {
            return (
              <div
                className={`group relative flex h-full items-center justify-center overflow-hidden rounded-full px-4 transition-transform duration-700 ease-in-out hover:scale-90 ${currentPage == item.src ? "scale-105 bg-neutral-800" : "scale-100"}`}
              >
                <Link
                  key={item.key}
                  className="z-10 w-fit text-center font-semibold text-white"
                  to={item.src}
                >
                  <p className={`${currentPage == item.src && "text-sky-400"}`}>
                    {item.name}
                  </p>
                </Link>
                {currentPage != item.src && (
                  <div className="absolute h-0 w-0 rounded-full bg-neutral-600 opacity-100 transition-all duration-500 ease-in-out group-hover:h-[300px] group-hover:w-[300px] group-hover:opacity-25"></div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex w-40 items-center justify-center">
          <Link
            className="flex h-fit items-center gap-2 rounded-full bg-sky-400 px-4 py-2"
            onMouseEnter={handleContactHover}
            onMouseLeave={handleContactHover}
          >
            <p className="font-semibold">CONTACT US</p>
            {contactHover === true ? (
              <MdArrowForward size={13} />
            ) : (
              <MdArrowOutward size={13} />
            )}
          </Link>
        </div>
      </nav>
      <nav className="sticky top-0 z-50 flex h-20 items-center justify-between p-4 backdrop-blur-2xl lg:hidden">
        <div className="flex items-center justify-center text-white">
          Logo Here
        </div>
        <div
          className="rounded-2xl bg-neutral-900 p-4 hover:cursor-pointer"
          onClick={handleNav}
        >
          {nav ? (
            <RxCross2 size={26} className="text-orange-400" />
          ) : (
            <FaGripLines size={26} className="text-white" />
          )}
        </div>
      </nav>
      <div
        className={
          nav
            ? "fixed top-20 z-10 flex h-fit w-full flex-col items-center gap-4 border-b border-neutral-900 bg-black p-4 pt-8 duration-300 ease-in-out lg:hidden"
            : "fixed -top-full z-10 flex h-fit w-full flex-col items-center gap-4 border-b border-neutral-900 bg-black p-4 pt-8 duration-300 ease-in-out lg:hidden"
        }
      >
        {navValues.map((item, index) => {
          return (
            <Link
              key={index}
              className={`w-full rounded-full bg-neutral-600 p-4 text-center text-white`}
              to={item.src}
              onClick={() => setNav(false)}
            >
              {item.name}
            </Link>
          );
        })}
        <Link
          className={`my-4 w-full rounded-full border border-neutral-700 p-4 text-center text-white transition-colors duration-300 ease-in-out hover:bg-orange-400 hover:text-black`}
          to="/contact"
          onClick={() => setNav(false)}
        >
          CONTACT US
        </Link>
      </div>
    </>
  );
}
