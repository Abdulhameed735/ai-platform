import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/MobileSidebar";

const NavBar = () => {
  return (
    <nav className="flex items-center p-4">
      <MobileSidebar />

      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default NavBar;
