import { getMe } from "@services/user";
import { useEffect, useState } from "react";

export default function Login() {
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    const me = await getMe();
    setUser(me);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1 data-testid="title">Login</h1>
      {user && <p data-testid="username">{user?.name}</p>}
    </div>
  );
}
