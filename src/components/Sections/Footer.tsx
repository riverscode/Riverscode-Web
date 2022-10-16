import Image from "next/image";
import Link from "next/link";
import { redesSociales } from '../../constants'


const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-12">
      <div className=" border-b border-gray-300 pb-4">
        <div className="flex justify-center items-center max-w-7xl m-auto">
          <Image
            src="/assets/logo.svg"
            alt="Logo Lambda BIM"
            width={30}
            height={30}
          />
          <p className="ml-2 text-xl font-semibold ">RiversCode</p>
        </div>
      </div>

      <div className="text-center flex justify-around mt-6 px-6 max-w-3xl mx-auto">
        {redesSociales.map((redSocial, index) => {
          return (
            <a href={redSocial.link} key={index}>
              <Image
                src={`/assets/redes/${redSocial.icon}.svg`}
                alt={redSocial.icon}
                width={35}
                height={35}
              />
            </a>
          );
        })}
      </div>
      <p className="mt-6 text-center text-md italic font-bold text-gray-700">
        Codeado con Javascript y mucho 
        <span className="text-red-700 text-2xl"> ♥ </span>
      </p>
    </footer>
  );
};

export default Footer;
