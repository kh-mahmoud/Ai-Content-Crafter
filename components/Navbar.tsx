
import { SidebarTrigger } from "./ui/sidebar";
import NavItems from "./NavItems";


const Navbar = () => {
  return (
    <nav className="flex justify-between w-full p-4 items-center">
      <SidebarTrigger className="cursor-pointer" />
      <NavItems />
    </nav>
  );
};

export default Navbar;
