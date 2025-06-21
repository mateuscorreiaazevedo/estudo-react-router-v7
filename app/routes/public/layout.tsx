import { Outlet } from "react-router";

export default function PublicLayout() {
  return (
    <div className="flex items-center h-screen w-full justify-center flex-col gap-2">
      <h2 className="uppercase">Public Layout</h2>
      <Outlet />
    </div>
  );
}
