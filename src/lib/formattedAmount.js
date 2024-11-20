const formattedAmount = (amount) => {
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Mengatur jumlah desimal
  }).format(amount);

  return formatted;
};
export default formattedAmount;
