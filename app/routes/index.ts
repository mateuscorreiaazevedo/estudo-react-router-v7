import { redirect, type LoaderFunction } from "react-router";

const publicRoutes: PublicRoute[] = [
  {
    path: "/login",
    whenAuthenticated: "redirect",
  },
  {
    path: "/register",
    whenAuthenticated: "redirect",
  },
];

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const token = request.headers.get("Authorization");

  const publicRoute = publicRoutes.find((route) => route.path === url.pathname);

  if (!token) {
    if (publicRoute) {
      return;
    }

    return redirect("/login");
  }

  if (token) {
    if (publicRoute && publicRoute.whenAuthenticated === "redirect") {
      return redirect("/hello");
    }

    return;
  }
};
