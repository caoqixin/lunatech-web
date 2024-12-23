import { ThemeSwitch } from "../theme-switch";
import { MobileSidebar } from "./mobile-sidebar";
import { UserButton } from "./user-button";

export const Navbar = () => {
  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-xl">主页</h1>
      </div>
      <MobileSidebar />
      <div className="flex items-center gap-1.5">
        <ThemeSwitch />
        <UserButton />
      </div>
    </nav>
  );
};
