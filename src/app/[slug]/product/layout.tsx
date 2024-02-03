import { Container } from "@/components/ui/container";
import BrandStack from "@/components/brand/stack";
import { Separator } from "@/components/ui/separator";
import UserBadge from "@/components/atoms/user-badge";
import SideMenu from "@/components/compositions/side-menu";

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container variant={"screen_flex_row"}>
      <Container className=" w-2/12 flex justify-center flex-col align-middle items-center py-8 px-4 border-r-2 border-secondary">
        <SideMenu />

        <Separator className="my-4" />
        <Container className="w-full">
          <UserBadge name={"John Wick"} role={"Admin"} image={""} />
        </Container>
        <Separator className="my-4" />
        <BrandStack className="w-full h-14" />
      </Container>
      {children}
    </Container>
  );
}
