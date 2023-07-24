"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import routes from "@/data/routes";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <section className="space-y-4 py-4 flex flex-col h-full bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          Logo
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-white hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "bg-white/10 text-white"
                  : "text-zinc-300"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
