import { SidebarTrigger } from "./ui/sidebar";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="justify-items-between sticky top-0 z-10 w-full p-4 bg-white/70 backdrop-blur-3xl">
      <SidebarTrigger className="cursor-pointer" />
      <NavItems />
    </nav>
  );
};

export default Navbar;
