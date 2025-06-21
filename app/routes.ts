import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/index.ts"),

  layout("routes/private/layout.tsx", [
    route("/hello", "routes/private/hello/index.tsx"),
  ]),

  layout("routes/public/layout.tsx", [
    route("/login", "routes/public/login/index.tsx"),
    route("/register", "routes/public/register/index.tsx"),
  ]),
] satisfies RouteConfig;
