"use server";

import api from "@/lib/axios";
import { cookies } from "next/headers";

interface LoginActionProps {
  username: string;
  password: string;
}

export async function loginAction({ username, password }: LoginActionProps) {
  const { set } = await cookies();

  try {
    const { data } = await api.post(`/login`, {
      username,
      password,
    });

    set({
      name: "Authorization",
      value: data.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return { success: true };
  } catch (err: any) {
    console.log(err);
    return {
      success: false,
      message:
        err.status == "401"
          ? "Credenciais inválidas!"
          : "Houve um erro ao efetuar login!",
    };
  }
}
