"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import formattedAmount from "@/lib/formattedAmount";
import dateFormat from "@/lib/dateFormat";
import { useTransition } from "react";
import deleteItem from "@/lib/deleteItem";

const BtnDelete = ({ data }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => {
      deleteItem(data.id); // Panggil server action untuk menghapus data
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="bg-cpink p-1 text-xs hover:scale-90 border-black border-2">
          <FaRegTrashAlt />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure delete this?
          </AlertDialogTitle>
          <AlertDialogDescription>
            <span className="bg-cpink font-bold">
              {data.title} | {data.income ? "+" : "-"}
              {formattedAmount(data.amount)} | {dateFormat(data.createdAt)}
            </span>
            <br />
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            {isPending ? "Deleting..." : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default BtnDelete;
