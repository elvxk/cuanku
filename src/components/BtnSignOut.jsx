"use client";
import { useClerk } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { IoLogOut } from "react-icons/io5";

export const BtnSignOut = () => {
  const { signOut } = useClerk();

  return (
    <Button
      onClick={() => signOut({ redirectUrl: "/" })}
      className="flex items-center gap-2 bg-white"
    >
      <IoLogOut /> Sign out
    </Button>
  );
};
