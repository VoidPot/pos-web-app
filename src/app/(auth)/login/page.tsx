import { Button } from "@/next-shared/components/ui/button";
import Link from "next/link";
import { Anchor } from "@/next-shared/components/ui/anchor";
import { Input } from "@/next-shared/components/ui/input";

export default function Login() {
  return (
    <>
      <h3 className="md:text-3xl text-2xl font-bold">Sign in.</h3>
      <div className="flex flex-col w-full mb-2 gap-3 md:max-w-xs">
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
