import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F5F7FE] transition-all duration-300 dark:bg-neutral-900">
      <Outlet />
    </div>
  );
}
