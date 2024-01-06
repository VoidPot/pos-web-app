import { ThemeModeToggle } from "@/next-shared/components/organisms/theme-mode-toggle";
import { Button } from "@/next-shared/components/ui/button";
import BrandSloganStack from "@/next-shared/components/atoms/brand/brand-slogan-stack";
import { Input } from "@/next-shared/components/ui/input";
import { Anchor } from "@/next-shared/components/ui/anchor";
import { RegisterForm } from "@/next-shared/components/forms/register-form";

export default function SignUp() {
  return (
    <>
      <h3 className="md:text-3xl text-2xl font-bold"> Create your account.</h3>
      <div className="flex flex-col w-full mb-2 gap-3 md:max-w-xs">
        <RegisterForm />
        <span className="text-[11px]">
          By signing up, you agree to the <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
        </span>
      </div>
      <div className="flex flex-col w-full gap-3 md:max-w-xs">
        <h6 className="text-xl font-sans">Already have an account?</h6>
        <Anchor variant={"outline"} href="/login">
          Sign In
        </Anchor>
      </div>
    </>
  );
}
