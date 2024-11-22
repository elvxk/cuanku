"use server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

const deleteItem = async (id) => {
  try {
    const res = await prisma.balance.delete({
      where: { id },
    });

    if (!res) throw new Error("Failed to delete the record");
    return {
      success: true,
      message: `Record "${id}" deleted successfully`,
    };
  } catch (error) {
    console.error("Failed to delete the record:", error);
  } finally {
    revalidatePath("/"); // Atau rute yang sesuai
  }
};

export default deleteItem;
