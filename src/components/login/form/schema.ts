import z from "zod";

export const schema = z.object({
  username: z
    .string({ required_error: "Insira seu login de acesso!" })
    .min(1, "Insira seu login de acesso!"),
  password: z
    .string({ required_error: "Insira sua senha!" })
    .min(1, "Insira sua senha!"),
});

export type FormData = z.infer<typeof schema>;
