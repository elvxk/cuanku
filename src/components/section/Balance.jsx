import {
  FaArrowsDownToLine,
  FaMoneyBillTrendUp,
  FaWallet,
} from "react-icons/fa6";
import BalanceContent from "../BalanceContent";

const Balance = ({ className, balance }) => {
  const income = balance
    .filter((item) => item.income)
    .reduce((sum, item) => sum + item.amount, 0);

  const spend = balance
    .filter((item) => !item.income)
    .reduce((sum, item) => sum + item.amount, 0);

  const balanceTotal = income - spend;

  return (
    <div className={`grid md:grid-cols-3 gap-4 w-full ${className}`}>
      <BalanceContent
        className="bg-cyellow"
        icon={<FaWallet />}
        value={balanceTotal}
        desc="Balance"
      />
      <BalanceContent
        className="bg-cblue"
        icon={<FaArrowsDownToLine />}
        value={income}
        desc="Income"
      />
      <BalanceContent
        className="bg-cpink"
        icon={<FaMoneyBillTrendUp />}
        value={spend}
        desc="Expenditure"
      />
    </div>
  );
};
export default Balance;
