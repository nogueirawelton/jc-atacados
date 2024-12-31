import { Form } from "@/components/login/form";
import { Logo } from "@/components/ui/logo";

export default function Login() {
  return (
    <main className="h-screen grid place-items-center">
      <div className="flex flex-col w-full gap-16 items-center">
        <Logo className="lg:w-[275px] h-auto" />
        <Form />
      </div>
    </main>
  );
}
