interface PublicRoute {
  path: string;
  whenAuthenticated?: "redirect" | "next";
}
