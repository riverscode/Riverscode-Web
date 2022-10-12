import Image from "next/image"

const Tecnologies = () => {
  const tecnologies = [
    "js",
    "react",
    "vite",
    "ts",
    "tailwind",
    "git",
    "css",
    "sass",
  ]
  return (
    <section className="bg-black px-4 py-8 flex justify-center gap-4 sm:gap-12 lg:gap-20 flex-nowrap">
      {tecnologies.map((tecnology) => (<Image key={tecnology} src={`/assets/tecnologies/${tecnology}.svg`} alt="" width={40} height={40} />))}
    </section>
  )
}
export default Tecnologies