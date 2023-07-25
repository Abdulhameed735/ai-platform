import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/MobileSidebar";

const NavBar = () => {
  return (
    <nav className="w-full top-0 right-0 flex items-center p-4">
      <MobileSidebar />

      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default NavBar;
