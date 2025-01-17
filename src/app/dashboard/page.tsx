import { Distribuitor } from "@/components/dashboard/distribuitor";
import { Seller } from "@/components/dashboard/seller";
import useAuth from "@/hooks/useAuth";

export default async function Dashboard() {
  const {
    user: { username, role },
  } = await useAuth();

  return (
    <div className="text-black dark:text-white">
      <div>Olá {username}!</div>
      {role == "ROLE_DISTRIBUTOR" ? <Distribuitor /> : <Seller />}
    </div>
  );
}
