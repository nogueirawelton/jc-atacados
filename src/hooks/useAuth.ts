import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

interface UserPayload {
  username: string;
  id: number;
  role: "ROLE_DISTRIBUTOR" | "ROLE_SELLER";
}

export default async function useAuth(): Promise<{
  token: string | undefined;
  user: UserPayload;
}> {
  const { get } = await cookies();

  const token = get("Authorization")?.value;

  const payload = jwt.decode(token!) as any; // Neste momento o token deve existir.

  return {
    token,
    user: {
      id: payload?.id,
      username: payload?.username,
      role: payload?.roles[0],
    },
  };
}
