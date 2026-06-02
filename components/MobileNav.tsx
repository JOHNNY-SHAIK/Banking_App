"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>

       <SheetContent side="left"
  className="w-[280px] border-none bg-white p-0"
>
  <div className="flex h-full flex-col justify-between">

    <div>
      <Link
        href="/"
        className="flex items-center gap-2 px-6 pt-8"
      >
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="logo"
        />

        <h1 className="text-[26px] font-bold text-black">
          Horizon
        </h1>
      </Link>

      <nav className="mt-10 flex flex-col gap-2 px-4">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route ||
            pathname.startsWith(`${item.route}/`);

          return (
            <SheetClose asChild key={item.route}>
              <Link
                href={item.route}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-4 text-black",
                  {
                    "bg-bank-gradient text-white": isActive,
                  }
                )}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />

                <p>{item.label}</p>
              </Link>
            </SheetClose>
          );
        })}
      </nav>
    </div>

    <div className="border-t p-6">
      FOOTER
    </div>

  </div>
</SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;