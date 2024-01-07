import { ThemeModeToggle } from "@/next-shared/components/organisms/theme-mode-toggle";
import { Button } from "@/next-shared/components/ui/button";
import BrandStackSlogan from "@/next-shared/components/brand/stack-with-slogan";
import Link from "next/link";
import { Input } from "@/next-shared/components/ui/input";
import { Anchor } from "@/next-shared/components/ui/anchor";

export default function Login() {
  return (
    <>
      <h3 className="md:text-3xl text-2xl font-bold">Find your account.</h3>
      <div className="flex flex-col w-full mb-2 gap-3 md:max-w-xs">
        <Input
          placeholder="Email, phone or username"
          autoComplete="username"
          autoCorrect="on"
        />
        <Button variant="default">Next</Button>
        <Link href={"/login"} legacyBehavior>
          <Anchor variant="secondary" className="mt-3">
            Try Signing In
          </Anchor>
        </Link>
      </div>
      <div className="flex flex-col w-full gap-3 md:max-w-xs">
        <p className="text-sm font-sans">
          Don&apos;t have an account?{" "}
          <Link className="text-info" href="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
