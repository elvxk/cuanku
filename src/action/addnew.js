"use server";
import { revalidatePath } from "next/cache";

const addNew = async (formData) => {
  const title = formData.get("title");
  const type = formData.get("type");
  const amount = formData.get("amount");

  // Simulasi penyimpanan data (misal ke database)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Log data yang diterima (untuk debugging)
  console.log({ title, type, amount });
  console.log(new Date().toLocaleString());

  // Setelah data tersimpan, lakukan revalidasi
  revalidatePath("/");

  return {
    success: true,
    message: `Record "${title}" added successfully`,
  };
};

export default addNew;
