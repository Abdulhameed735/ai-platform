"use client";
import SideBar from "@/components/SideBar";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={24} className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
