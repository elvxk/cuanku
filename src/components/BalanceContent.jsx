import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const BalanceContent = ({ icon, value, desc, className, ...props }) => {
  return (
    <Card className={`mx-4 md:mx-0 ${className}`} {...props}>
      <CardHeader>
        <CardTitle className="flex gap-4">
          {icon}
          {value}
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BalanceContent;
