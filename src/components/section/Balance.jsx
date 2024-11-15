import {
  FaArrowsDownToLine,
  FaMoneyBillTrendUp,
  FaWallet,
} from "react-icons/fa6";
import BalanceContent from "../BalanceContent";

const Balance = ({ className }) => {
  return (
    <div className={`grid md:grid-cols-3 gap-4 w-full ${className}`}>
      <BalanceContent
        className="bg-cyellow"
        icon={<FaWallet />}
        value="Rp. 10000"
        desc="Balance"
      />
      <BalanceContent
        className="bg-cblue"
        icon={<FaArrowsDownToLine />}
        value="Rp. 10000"
        desc="Income"
      />
      <BalanceContent
        className="bg-cpink"
        icon={<FaMoneyBillTrendUp />}
        value="Rp. 10000"
        desc="Expenditure"
      />
    </div>
  );
};
export default Balance;
