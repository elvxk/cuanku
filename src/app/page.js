import Logo from "@/components/Logo";
import Balance from "@/components/section/Balance";
import History from "@/components/section/History";
import AddContent from "@/components/AddContent";
import { BtnSignOut } from "@/components/BtnSignOut";
import { currentUser } from "@clerk/nextjs/server";
import AccountContent from "@/components/AccountContent";
import BtnManageUser from "@/components/BtnManagaeAccount";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex flex-col justify-center w-full items-center min-h-screen gap-4 my-5">
      <Logo />
      <Separator className="bg-cgrey my-2" />
      <AccountContent user={user} />
      <Balance className="mt-5" />
      <History />
      <AddContent />
      <Separator className="bg-cgrey my-2" />
      <div className="flex items-center gap-4">
        <BtnManageUser />
        <BtnSignOut />
      </div>
    </div>
  );
}
