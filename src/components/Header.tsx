import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-[50%] translate-x-[-50%] pt-[35px] w-full z-10 mix-blend-difference">
      <h1 className="hidden">Sky Portfolio</h1>
      <nav className="relative">
        <ul className="flex items-center w-full justify-center">
          <li className="uppercase text-white translate-x-[82px]">sky</li>
          <li className="uppercase text-white ml-[307px]">portfolio</li>
        </ul>
      </nav>
    </header>
  );
}
