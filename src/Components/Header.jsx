import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState("showMenu");

  const toggleMenu = () => {
    if (showMenu !== "hideMenu") {
      setShowMenu("hideMenu");
    } else {
      setShowMenu("showMenu");
    }
  };

  const closeMenu = () => {
    setShowMenu("hideMenu");
  };

  const headerLinks = [
    { name: "Home", link: "#" },
    { name: "Transactions", link: "#" },
    { name: "Payments", link: "#" },
    { name: "Deposits", link: "#" },
    { name: "Credits", link: "#" },
    { name: "Archive", link: "#" },
  ];

  return (
    <div className="flex flex-col justify-center font-bold text-gray-700 sticky top-0">
      <div className="flex flex-row items-center justify-between">
        <div className="w-auto md:w-1/4 ml-2">
          <Link
            to={"#"}
            className="uppercase text-xl md:text-2xl tracking-tight font-extrabold text-red-600"
          >
            Lines Bank
          </Link>
        </div>
        <ul className="hidden lg:flex flex-row md:gap-5 justify-between md:3/4 lg:w-1/2 ">
          {headerLinks.map((link) => (
            <li key={link}>{link.name}</li>
          ))}
        </ul>

        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden"
          onClick={toggleMenu}
        />
      </div>
      <div className={showMenu}>
        <ul className="flex flex-col gap-8 ">
          {headerLinks.map((link) => (
            <li key={link}>{link.name}</li>
          ))}
        </ul>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-2xl  text-gray-800 "
          onClick={closeMenu}
        />
      </div>
    </div>
  );
};
