"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { IoSettings } from "react-icons/io5";

const BtnManageUser = () => {
  const { openUserProfile } = useClerk();

  return (
    <Button
      className="flex items-center gap-2 bg-cblue"
      onClick={() => openUserProfile()}
    >
      <IoSettings /> Edit Account
    </Button>
  );
};
export default BtnManageUser;
