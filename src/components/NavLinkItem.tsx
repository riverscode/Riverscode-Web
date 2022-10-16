type NavLinkItemProps = {
  text: string;
}

const NavLinkItem = ({text}:NavLinkItemProps) => {
  return (
    <li className="relative group py-4">
      <a href="#" className="group-hover:text-Orange">{text}</a>
      <span className="w-0 absolute bottom-0 left-0 block h-1 group-hover:bg-Orange group-hover:w-full transition-all duration-500"></span>
    </li>
  )
}
export default NavLinkItem