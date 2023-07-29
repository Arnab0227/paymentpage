import { BiSolidHelpCircle } from "react-icons/bi";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-5 z-10 transition-transform transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {
        <div className="flex pt-10 pb-10 justify-between items-center">
          <div className="sm:hidden">
            <IoChevronBackCircleSharp />
          </div>
          <h3 className="pl-10 font-semibold text-xl cursor-pointer">
            tickete
          </h3>
          <div className="pr-10 flex items-center space-x-1 cursor-pointer">
            <BiSolidHelpCircle />
            <h4>Help</h4>
          </div>
        </div>
      }
    </header>
  );
}

export default Navbar;
