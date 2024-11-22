"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const addNew = async (formData, user_id, currentBalance) => {
  const title = formData.get("title");
  const type = formData.get("type");
  const amount = +formData.get("amount");
  const income = type === "income" ? true : false;

  const currentIncome = currentBalance
    .filter((item) => item.income)
    .reduce((sum, item) => sum + item.amount, 0);

  const currentSpend = currentBalance
    .filter((item) => !item.income)
    .reduce((sum, item) => sum + item.amount, 0);

  const balanceTotal = currentIncome - currentSpend;
  if (!income && amount > balanceTotal) {
    return {
      success: false,
      message: `Insufficient balance`,
    };
  }

  // Simulasi penyimpanan data (misal ke database)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const res = await prisma.balance.create({
      data: {
        title,
        amount,
        income,
        userId: user_id,
      },
    });
    if (!res) {
      throw new Error("Failed to add new record");
    }

    return {
      success: true,
      message: `Record "${title}" added successfully`,
    };
  } catch (err) {
    throw new Error(err);
  } finally {
    revalidatePath("/");
  }
};

export default addNew;
