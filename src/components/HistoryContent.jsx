import formattedAmount from "@/lib/formattedAmount";
import { Separator } from "./ui/separator";
import BtnDelete from "./BtnDelete";
import dateFormat from "@/lib/dateFormat";

const HistoryContent = ({ data }) => {
  return (
    <>
      <span className="text-xs">{dateFormat(data.createdAt)}</span>
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm lg:text-lg">{data.title}</span>
        <div className="flex items-center gap-1">
          <span
            className={`font-bold ${data.income ? "bg-cblue" : "bg-cpink"} px-2 text-sm lg:text-lg`}
          >
            {data.income ? "+" : "-"} {formattedAmount(data.amount)}
          </span>
          <BtnDelete data={data} />
        </div>
      </div>
      <Separator className="bg-cgrey my-2" />
    </>
  );
};
export default HistoryContent;
