import { Card } from "./ui/card";

const Logo = () => {
  return (
    <>
      <Card className="group flex items-center hover:scale-105 font-bold text-4xl rounded-none py-2 px-4 bg-blue hover:cursor-pointer hover:px-4 rounded-tl-xl font-roboto">
        <span className="inline-block group-hover:me-1 group-hover:bg-cblue">
          CUAN
        </span>
        <span className="group-hover:rotate-[340deg] text-2xl transition-all inline-block bg-black group-hover:bg-cpink text-white">
          KU
        </span>
      </Card>
      <h1 className="text-center">
        &quot;Know Your <span className="font-bold bg-cpink">Flow</span>,
        Control Your <span className="font-bold bg-cblue">Growth</span>.&quot;
      </h1>
    </>
  );
};
export default Logo;
