import BrandSideBySide from "@/components/atoms/brand/side-by-side";
import BrandStack from "@/components/atoms/brand/brand-stack";
import { CreateAccount } from "@/components/organisms/create-account-card";
import { LoginForm } from "@/components/organisms/login-form";
import { ProfileForm } from "@/components/organisms/profile-form";
import { ThemeModeToggle } from "@/components/organisms/theme-mode-toggle";
import { LoginCard } from "@/components/templates/login-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IoShareSocialSharp } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";
import { RiSlideshow3Fill } from "react-icons/ri";
import GoogleAuth from "@/components/molecules/GoogleAuth";
import BrandSloganStack from "@/components/atoms/brand/brand-slogan-stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-4 md:px-8 gap-10 pb-20 justify-center align-middle items-center">
      <nav className="flex items-center justify-between py-4 w-full">
        <div className="flex items-center flex-shrink-0 text-foreground mr-6">
          <span className="font-semibold font-mono text-xl tracking-tight max-h-5">
            <BrandStack className="h-6" />
          </span>
        </div>
        {/* <GoogleAuth /> */}

        <div className="flex w-auto gap-2">
          <ThemeModeToggle />
          <Button>Join Us</Button>
        </div>
      </nav>
      <section className="flex w-full justify-center align-middle grow md:flex-row md:gap-32 flex-col items-center gap-20">
        <div className="flex flex-col justify-center align-middle items-center md:items-end md:px-0 px-6">
          <div>
            <h6 className="flex md:justify-end justify-center align-middle items-center gap-3 font-sans text-lg font-semibold">
              <IoShareSocialSharp />
              Unified Links
            </h6>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Centralize your social media presence with a unified link.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h6 className="flex md:justify-end justify-center align-middle items-center gap-3 font-sans text-lg font-semibold">
              <RiSlideshow3Fill />
              Content Showcase
            </h6>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Showcase your content effortlessly, from images to videos.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h6 className="flex md:justify-end justify-center align-middle items-center gap-3 font-sans text-lg font-semibold">
              <PiHandshakeFill />
              Dynamic Collaborations
            </h6>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Forge meaningful partnerships with influence&apos;s and
              businesses.
            </p>
          </div>
        </div>

        <div className="flex flex-col max-w-md gap-4 justify-center align-middle items-center">
          <BrandSloganStack className="h-28 md:h-40" />
          <h1 className="hidden">Soclif: Where Social Connections Thrive.</h1>
          <p className="hidden text-1xl w-10/12 text-muted-foreground text-center">
            Unify Your Social Presence, Forge Collaborations, Elevate Your
            Influence.
          </p>
          {/* <Button>Get Started</Button> */}
        </div>
      </section>
      <section className="flex justify-center align-middle max-w-md w-full flex-col gap-10 items-center">
        {/* <CreateAccount />
          <ProfileForm /> */}
        {/* <LoginForm /> */}
        <LoginCard />
      </section>
    </main>
  );
}
