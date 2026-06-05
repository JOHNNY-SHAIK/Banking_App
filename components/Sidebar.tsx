"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "./ui/Footer";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[280px] flex-col border-r bg-white px-6 py-8">
      {/* Logo */}
      <Link
        href="/"
        className="mb-12 flex items-center gap-2"
      >
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="Horizon Logo"
        />

        <h1 className="text-3xl font-bold text-black">
          Horizon
        </h1>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-3">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route ||
            pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.route}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-4 transition-all",
                {
                  "bg-bank-gradient": isActive,
                }
              )}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-0 invert": isActive,
                  })}
                />
              </div>

              <span
                className={cn(
                  "font-medium text-black",
                  {
                    "text-white": isActive,
                  }
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
        <Footer user={user} />
    </aside>
  );
};


export default SideBar;