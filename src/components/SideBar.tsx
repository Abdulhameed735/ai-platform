"use client";
import Link from "next/link";

const SideBar = () => {
  return (
    <section className="space-y-4 py-4 flex flex-col h-full bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          Logo
        </Link>
      </div>
    </section>
  );
};

export default SideBar;
