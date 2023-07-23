import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <MenuIcon size={24} />
      </Button>

      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default NavBar;
