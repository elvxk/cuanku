import { Separator } from "./ui/separator";
import { FaRegTrashAlt } from "react-icons/fa";

const HistoryContent = ({ date, title, value, income }) => {
  return (
    <>
      <span className="text-xs">{date}</span>
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm lg:text-lg">{title}</span>
        <div className="flex items-center gap-1">
          <span
            className={`font-bold ${income ? "bg-cblue" : "bg-cpink"} px-2 text-sm lg:text-lg`}
          >
            {income ? "+" : "-"} Rp. {value}
          </span>
          <button className="bg-cpink p-1 text-xs hover:scale-90 border-black border-2">
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
      <Separator className="bg-cgrey my-2" />
    </>
  );
};
export default HistoryContent;
