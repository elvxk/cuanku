import Logo from "@/components/Logo";
import Balance from "@/components/section/Balance";
import History from "@/components/section/History";
import Account from "@/components/section/Account";
import AddContent from "@/components/AddContent";
import { BtnSignOut } from "@/components/BtnSignOut";
import { currentUser } from "@clerk/nextjs/server";
import BtnManageUser from "@/components/BtnManagaeAccount";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/prisma";

export default async function Home() {
  const user = await currentUser();
  const balance = await prisma.balance.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col justify-center w-full items-center min-h-screen gap-4 my-5">
      <Logo />
      <Separator className="bg-cgrey my-2 mx-4 md:mx-0" />
      <Account user={user} />
      <Balance className="mt-5" balance={balance} />
      <History balance={balance} />
      <AddContent user_id={user.id} currentBalance={balance} />
      <Separator className="bg-cgrey my-2 mx-4 md:mx-0" />
      <div className="flex items-center gap-4">
        <BtnManageUser />
        <BtnSignOut />
      </div>
    </div>
  );
}
