import AppLoginForm from "@/components/forms/app-login-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold md:pb-4 pt-4 md:pt-0">
        POS System.
      </h1>
      <h3 className="md:text-3xl text-2xl font-bold">Login</h3>
      <div className="flex flex-col w-full mb-2 gap-3 md:max-w-xs">
        <AppLoginForm redirect={"/stores"} />
      </div>
      <div className="flex flex-col w-full gap-3 md:max-w-xs">
        <h6 className="text-xl font-sans">Need it for your store?</h6>

        <Button variant={"outline"}>Create Account</Button>
      </div>
    </>
  );
}
