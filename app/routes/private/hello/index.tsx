import { useLoaderData } from "react-router";

export const loader = () => {
  return {
    user: {
      name: "Mateus",
    },
  };
};

export default function AuthenticatedHome() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="flex items-center h-screen w-full justify-center flex-col gap-2">
      <h1>Olá {user.name}</h1>
    </div>
  );
}
