import { Outlet } from "react-router";

export default function PrivateLayout() {
  return (
    <div>
      <h1>Private Layout</h1>
      <Outlet />
    </div>
  );
}
