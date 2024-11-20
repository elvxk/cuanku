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
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const BtnDelete = async ({ data }) => {
  const handleDelete = async () => {
    try {
      await prisma.balance.delete({
        where: {
          id: data.id, // Menghapus data berdasarkan id
        },
      });

      revalidatePath("/"); // Atau rute yang sesuai
    } catch (error) {
      console.error("Failed to delete the record:", error);
    }
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
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default BtnDelete;
