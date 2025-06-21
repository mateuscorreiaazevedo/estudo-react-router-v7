import { Button } from "@/components/ui";
import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Registro - Teste" }];
};

export default function Register() {
  return (
    <div className="space-y-2">
      <h1>Registre-se clicando aqui!</h1>
      <Button>
        <Link to="/login">Para login</Link>
      </Button>
    </div>
  );
}
