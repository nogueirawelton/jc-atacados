"use client";

import { useRouter } from "next/router";

interface LogoutProps {
  handler: () => void;
}

export function LogoutButton({ handler }: LogoutProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        handler();
        router.push("/");
      }}
    >
      Sair
    </button>
  );
}
