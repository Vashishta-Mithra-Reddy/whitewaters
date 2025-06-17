import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm animate-in zoom-in-90 fade-in duration-500">
        <LoginForm />
      </div>
    </div>
  );
}
