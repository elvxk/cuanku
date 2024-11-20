import { LuHistory } from "react-icons/lu";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "../ui/scroll-area";
import HistoryContent from "../HistoryContent";

const History = async ({ balance }) => {
  return (
    <div className="w-full">
      <Card className="bg-white mx-4 md:mx-0">
        <CardHeader className="-mb-4">
          <CardTitle className="flex items-center gap-2">
            <LuHistory /> History
          </CardTitle>
        </CardHeader>
        <Separator className="bg-cgrey my-2" />
        <CardContent>
          <ScrollArea className="h-[400px]">
            {balance.map((data, index) => {
              return <HistoryContent key={index} data={data} />;
            })}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
export default History;
