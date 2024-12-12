import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (showMenu !== false) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex flex-row justify-between  font-bold text-gray-700">
      <div className="w-auto md:w-1/4 ml-2">
        <Link
          to={"#"}
          className="uppercase text-xl md:text-2xl tracking-tight font-extrabold"
        >
          Lines Bank
        </Link>
      </div>
      <ul className="hidden md:flex flex-row md:gap-5 justify-between md:3/4 lg:w-1/2 ">
        <li>
          <Link to={"#"}>Home</Link>
        </li>
        <li>
          <Link to={"#"}>Transactions</Link>
        </li>
        <li>
          <Link to={"#"}>Payments</Link>
        </li>
        <li>
          <Link to={"#"}>Deposits</Link>
        </li>
        <li>
          <Link to={"#"}>Credits</Link>
        </li>
        <li>
          <Link to={"#"}>Archive</Link>
        </li>
      </ul>
      {showMenu && (
        <ul className="flex flex-col gap-4 absolute top-0 left-0 right-0 h-svh w-svw bg-white p-4">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl absolute right-2 top-2 text-gray-800 "
            onClick={closeMenu}
          />
          <li>
            <Link to={"#"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>Transactions</Link>
          </li>
          <li>
            <Link to={"#"}>Payments</Link>
          </li>
          <li>
            <Link to={"#"}>Deposits</Link>
          </li>
          <li>
            <Link to={"#"}>Credits</Link>
          </li>
          <li>
            <Link to={"#"}>Archive</Link>
          </li>
        </ul>
      )}
      <div className="hidden lg:flex flex-row justify-end w-1/4">
        <p className="">Dickson Kinyua</p>
        <img src="" alt="" />
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="md:hidden"
        onClick={toggleMenu}
      />
    </div>
  );
};
