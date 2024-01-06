import { ThemeModeToggle } from "@/components/organisms/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import GoogleAuth from "@/components/molecules/GoogleAuth";
import Link from "next/link";

import BrandSloganStack from "@/components/atoms/brand/brand-slogan-stack";
import { Anchor } from "@/components/ui/anchor";
import { LoginForm } from "@/components/organisms/login-form";
import { RegisterForm } from "@/components/forms/register-form";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-center align-middle items-center">
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold md:pb-4 pt-4 md:pt-0">
          Elevate Your Social Hub with Soclif.com!
        </h1>
        <h3 className="md:text-3xl text-2xl font-bold">
          Showcase your links, content, and collaborations effortlessly on one
          platform. Sign up now to amplify your social presence, connect with
          influence&apos;s, and embark on a journey of endless opportunities
        </h3>
        <RegisterForm />
        <div className="flex flex-col w-full mb-2 gap-3 md:max-w-xs">
          <GoogleAuth mode="signUp" />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          <Link href={"/signup"} legacyBehavior>
            <Anchor>Create Account</Anchor>
          </Link>
          <span className="text-[11px]">
            By signing up, you agree to the{" "}
            <Link href="/tos">Terms of Service</Link> and{" "}
            <Link href="/privacy">Privacy Policy</Link>, including{" "}
            <a href="/cookie-use">Cookie Use</a>.
          </span>
        </div>
        <div className="flex flex-col w-full gap-3 md:max-w-xs">
          <h6 className="text-xl font-sans">Already have an account?</h6>

          <Link href={"/login"} legacyBehavior>
            <Anchor variant={"outline"}>Sign In</Anchor>
          </Link>
        </div>
      </div>
    </section>
  );
}
