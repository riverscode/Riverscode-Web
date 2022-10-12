import style from "../../styles/style";
import Image from "next/image";

const Banner = () => {
  return (
    <section className={`${style.boxWidth} flex flex-col md:flex-row mx-auto px-12 mt-32 mt md:mt-44`}>
      <div className="text-center md:text-left md:w-1/3">
        <h1 className="font-bold text-2xl md:text-4xl">Hola, mi nombre es <br /> <span className="text-5xl md:text-7xl ">Renzo Rios</span></h1>
        <p className="mt-8 text-lg md:text-xl">Soy programador FullStack en Javascript con experiencia desarollando aplicaciones que impactan vidas.</p>
      </div>
      <div className="flex justify-center mt-4 z-0 md:w-1/3">
        <Image className="z-0" src="/assets/renzo-rios.webp" height={500} width={500} alt="Renzo Rios" />
      </div>
      <div className="hidden md:block md:w-1/3 relative">
        <div className="flex justify-center flex-col text-center absolute">
          <Image className="z-0" src="/assets/nodejs-developer.jpg" height={90} width={200} alt="node.js" />
          <p className="font-semibold ">Node.js Developer</p>
        </div>
        <div className="flex justify-center flex-col text-center absolute top-36 right-0">
          <Image className="z-0" src="/assets/react-developer.jpg" height={90} width={200} alt="node.js" />
          <p className="font-semibold ">React Developer</p>
        </div>
        <div className="flex justify-center flex-col text-center absolute top-64 ">
          <Image className="z-0" src="/assets/csharp-developer.jpg" height={90} width={200} alt="node.js" />
          <p className="font-semibold ">C# Developer</p>
        </div>
        
      </div>
    </section>
  )
}
export default Banner