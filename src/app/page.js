import Logo from "@/components/Logo";
import Balance from "@/components/section/Balance";
import History from "@/components/section/History";
import AddContent from "@/components/AddContent";
import { BtnSignOut } from "@/components/BtnSignOut";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full items-center min-h-screen gap-4 my-5">
      <Logo />
      <Balance className="mt-5" />
      <History />
      <AddContent />
      <BtnSignOut />
    </div>
  );
}
