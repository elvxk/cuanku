"use client";
import { useClerk } from "@clerk/nextjs";

export const BtnSignOut = () => {
  const { signOut } = useClerk();

  return (
    <button onClick={() => signOut({ redirectUrl: "/" })}>Sign out</button>
  );
};
