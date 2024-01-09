import { Connection_Role } from "@/next-shared/__generated__/graphql";
import AppLogin from "@/next-shared/components/pages/app-login";

export default function Home() {
  return (
    <AppLogin
      redirect="/stores"
      roles={[
        Connection_Role.Admin,
        Connection_Role.Biller,
        Connection_Role.Manager,
      ]}
    />
  );
}
