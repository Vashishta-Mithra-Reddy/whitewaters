import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";
import { UserIcon } from "lucide-react";

export async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <Link href="/profile" className="flex items-center gap-2 hover:text-primary transition-colors">
        <UserIcon size={20} />
      </Link>
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
      <Button asChild size="sm" variant={"default"} className="bg-blue-600 hover:bg-blue-500 text-white">
        <Link href="/auth/login">Sign in</Link>
      </Button>
    </div>
  );
}
