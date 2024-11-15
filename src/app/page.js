import { IoMdAddCircle } from "react-icons/io";

import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Balance from "@/components/section/Balance";
import History from "@/components/section/History";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full items-center min-h-screen gap-4 my-5">
      <Logo />
      <Balance className="mt-5" />
      <History />
      <Button className="bg-white flex gap-2 justify-center items-center">
        <IoMdAddCircle /> Add New
      </Button>
    </div>
  );
}
