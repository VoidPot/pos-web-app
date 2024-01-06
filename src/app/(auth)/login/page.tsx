import { ThemeModeToggle } from "@/components/organisms/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import GoogleAuth from "@/components/molecules/GoogleAuth";
import BrandSloganStack from "@/components/atoms/brand/brand-slogan-stack";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Anchor } from "@/components/ui/anchor";

export default function Login() {
  return (
    <>
      <h3 className="md:text-3xl text-2xl font-bold">Sign in.</h3>
      <div className="flex flex-col w-full mb-2 gap-3 md:max-w-xs">
        <GoogleAuth mode="signIn" />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
          </div>
        </div>
        <Input
          placeholder="Email, phone or username"
          autoComplete="username"
          autoCorrect="on"
        />
        <Button variant="default">Next</Button>
        <Link href={"/password-reset"} legacyBehavior>
          <Anchor variant="secondary" className="mt-3">
            Forgot Password
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
