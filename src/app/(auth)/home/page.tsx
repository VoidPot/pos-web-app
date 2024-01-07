import Link from "next/link";

import BrandStackSlogan from "@/next-shared/components/brand/stack-with-slogan";
import { Anchor } from "@/next-shared/components/ui/anchor";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold md:pb-4 pt-4 md:pt-0">
        Dreams Ignite
      </h1>
      <h3 className="md:text-3xl text-2xl font-bold">Join today.</h3>
      <div className="flex flex-col w-full mb-2 gap-3 md:max-w-xs">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
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
    </>
  );
}
