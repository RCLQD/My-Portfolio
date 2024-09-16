import Logo from "../assets/LOGO1.png"

export function Navbar() {
  return (
    <nav data-theme="sunset" className="flex justify-between p-2 sticky top-0 z-10">
      <span className="flex items-center gap-1">
        <img src={Logo} alt="Logo" className="size-12" />
      </span>
      <ul className="flex items-center gap-x-10">
        <li className="font-medium hover:border-b-2 border-[#20af20]">
          <a href="#">Home</a>
        </li>
        <li className="font-medium hover:border-b-2 border-[#20af20]">
          <a href="#">About</a>
        </li>
        <li className="font-medium hover:border-b-2 border-[#20af20]">
          <a href="#">Portfolio</a>
        </li>
      </ul>
      <span className="flex items-center">
        <a
          href="mailto:reysilclarion17@gmail.com"
          target="_blank"
          className="flex items-center gap-1 hover:text-red-500"
        >
          <svg
            className="w-5 size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <h1>reysilclarion17@gmail.com</h1>
        </a>
      </span>
    </nav>
  );
}
