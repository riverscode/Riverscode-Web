import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from '../styles/style';

type NavLinkItemProps = {
  text: string;
  href: string
}

const NavLinkItem = ({text, href}:NavLinkItemProps) => {
  return (
    <li className="relative group ">
      <Link href={href} >
        <a className= "hover:text-primary" >{text}</a></Link>
      <span className="w-0 absolute -bottom-2 left-0 block h-1 group-hover:bg-primary group-hover:w-full transition-all duration-500"></span>
    </li>
  )
}

const Navbar = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleClick = ():void => {
    setIsHidden(!isHidden);
  };
  
  return (
    <header className="fixed top-0 right-0 w-full bg-white z-50">
      <div>
      <div className="relative border-b border-gray-300 ">
        <div className={`${style.boxWidth} mx-auto px-4 py-4 flex items-center justify-between`}>
          <Link href="/">
            <a className="flex items-center">
                <Image
                  src="/assets/logo.svg"
                  alt="RiversCode"
                  width={30}
                  height={30}
                />
              <p className="ml-2 text-xl font-semibold">Rivers Code</p>
            </a>
          </Link>
          <nav className="hidden md:flex items-center justify-between">
            <ul className="flex space-x-4  font-semibold ">
              <NavLinkItem text="Blog" href="/blog" />
              <NavLinkItem text="Proyectos" href="/projects" />

            </ul>
          </nav>
          <button
            className="h-6 w-6 md:hidden"
            onClick={handleClick}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute justify-end bg-transparent  px-6 py-2 transition-all duration-300  ${
          isHidden ? "-right-96" : "right-0 h-screen bg-black/60"
        }`}
      >
        <div className="flex flex-col z-50 px-6 py-4 space-y-6 w-80 bg-black rounded-md text-gray-200 font-semibold">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="hover:text-purple-400  transition-all duration-300">
                Inicio
              </a>
            </Link>
            <button
              className="h-6 w-6 md:hidden self-end"
              onClick={handleClick}
              aria-label="Menu Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <Link href="/blog">
            <a className="hover:text-purple-400  transition-all duration-300">
              Blog
            </a>
          </Link>
          <Link href="/cursos">
            <a className=" hover:text-purple-400  transition-all duration-300">
              Cursos
            </a>
          </Link>

        </div>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
