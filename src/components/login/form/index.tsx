"use client";

import { loginAction } from "@/actions/login-action";
import * as Input from "@/components/ui/auth-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch, Eye, EyeClosed, Lock, User } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormData, schema } from "./schema";

export function Form() {
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    startTransition(async () => {
      const { success, message } = await loginAction(data);

      if (!success) {
        toast.error(message);
      }

      router.push("/dashboard");
    });
  };

  return (
    <form
      className="w-full flex flex-col gap-6 px-4 max-w-[375px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input.Root error={errors.username?.message}>
        <Input.LeftIcon>
          <User className="text-zinc-900 size-6 dark:text-zinc-50" />
        </Input.LeftIcon>

        <Input.Box
          placeholder="Usuário"
          type="text"
          className="placeholder:text-sm placeholder:-translate-y-[1px]"
          {...register("username")}
        />
      </Input.Root>

      <Input.Root error={errors.password?.message}>
        <Input.LeftIcon>
          <Lock className="text-zinc-900 size-6 dark:text-zinc-50" />
        </Input.LeftIcon>

        <Input.Box
          placeholder="Senha"
          type={showPassword ? "text" : "password"}
          className="placeholder:text-sm placeholder:-translate-y-[1px]"
          {...register("password")}
        />

        <Input.RightIcon>
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeClosed className="text-zinc-900 size-6 dark:text-zinc-50" />
            ) : (
              <Eye className="text-zinc-900 size-6 dark:text-zinc-50" />
            )}
          </button>
        </Input.RightIcon>
      </Input.Root>

      <Link
        href=""
        className="font-semibold underline-offset-2 block ml-auto text-sm text-zinc-900 dark:text-zinc-50 text-right hover:underline"
      >
        Esqueceu a senha ?
      </Link>

      <button
        type="submit"
        disabled={isPending}
        className="w-full disabled:opacity-75 hover:opacity-90 transition-all duration-500 grid place-items-center bg-zinc-900 text-zinc-50 rounded-md dark:bg-zinc-50 dark:text-zinc-900 text-base h-14 font-bold"
      >
        {isPending ? <CircleNotch className="animate-spin size-7" /> : "Entrar"}
      </button>
    </form>
  );
}
