const dateFormat = (dateParam) => {
  const date = new Date(dateParam);
  const tanggal = date.toLocaleString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const jam = date.toLocaleString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${tanggal}, ${jam}`;
};
export default dateFormat;
