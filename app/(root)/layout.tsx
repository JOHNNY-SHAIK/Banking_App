import Sidebar from "@/components/SideBar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { getLoggedInUser } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
     
    const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in')
  return (
    <main className="flex h-screen w-full font-inter">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar user={loggedIn} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-auto">
        {/* Mobile Header */}
        <header className="flex items-center justify-between border-b bg-white px-5 py-4 lg:hidden">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="logo"
            />

            <h1 className="text-2xl font-bold text-black">
              Horizon
            </h1>
          </div>

          <MobileNav user={loggedIn} />
        </header>

        <div className="flex-1">
          {children}
        </div>
      </div>
    </main>
  );
}