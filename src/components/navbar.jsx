import { Link } from "react-router-dom";
import Logo from "../assets/LOGO1.png";

const Navbar = ({ onScrollTo, isNavbarVisible }) => {
  return (
    <nav
      data-theme="dark"
      className={`flex justify-between p-2 fixed top-0 w-full z-10 transition-transform duration-300 ${ isNavbarVisible ? "translate-y-0" : "-translate-y-full" }`}
    >
      <span className="flex items-center gap-1">
        <img src={Logo} alt="Logo" className="size-12" />
      </span>
      <ul className="flex items-center gap-x-10">
        <li className="font-medium hover:border-b-2 border-[#20af20]">
          <Link to="/" onClick={() => onScrollTo("home")}>
            Home
          </Link>
        </li>
        <li className="font-medium hover:border-b-2 border-[#20af20]">
          <Link to="/" onClick={() => onScrollTo("about")}>
            About
          </Link>
        </li>
        <li className="font-medium hover:border-b-2 border-[#20af20]">
          <Link to="/" onClick={() => onScrollTo("portfolio")}>
            Portfolio
          </Link>
        </li>
      </ul>
      <span className="flex items-center">
        <a
          href="mailto:reysilclarion17@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-red-500"
        >
          <svg
            className="w-5 size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <h1>reysilclarion17@gmail.com</h1>
        </a>
      </span>
    </nav>
  );
};

export default Navbar;