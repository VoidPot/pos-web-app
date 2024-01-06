import { ThemeModeToggle } from "@/components/organisms/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import GoogleAuth from "@/components/molecules/GoogleAuth";
import BrandSloganStack from "@/components/atoms/brand/brand-slogan-stack";
import { Input } from "@/components/ui/input";
import { Anchor } from "@/components/ui/anchor";
import { RegisterForm } from "@/components/forms/register-form";

export default function SignUp() {
  return (
    <>
      <h3 className="md:text-3xl text-2xl font-bold"> Create your account.</h3>
      <div className="flex flex-col w-full mb-2 gap-3 md:max-w-xs">
        <GoogleAuth mode="signUp" />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
          </div>
        </div>
        <RegisterForm />
        {/* 
        <Input type="text" placeholder="Name" />

        <div>
          <Input
            type="email"
            placeholder="Email"
            autoComplete="email"
            autoCorrect="on"
          />
          <p className="pt-2 text-xs text-right text-info cursor-pointer">
            Use phone instead
          </p>
        </div>

        <Button>Next</Button> */}
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
