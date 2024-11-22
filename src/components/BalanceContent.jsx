import formattedAmount from "@/lib/formattedAmount";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const BalanceContent = ({ icon, value, desc, className, ...props }) => {
  return (
    <Card className={`mx-4 md:mx-0 ${className}`} {...props}>
      <CardHeader>
        <CardTitle className="flex gap-4">
          {icon}
          <span
            className={`${+value < 0 && desc === "Balance" ? "bg-cpink" : ""}`}
          >
            {formattedAmount(value)}
          </span>
        </CardTitle>
        <CardDescription>
          {+value < 0 && desc === "Balance" ? (
            <span className="bg-cpink">
              Your current balance is minus, check your income and expenses
              again
            </span>
          ) : (
            desc
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BalanceContent;
