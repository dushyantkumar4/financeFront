import { Button } from "@/components/ui/button";
import { ChevronsRight, ChartNoAxesCombined, IndianRupee } from "lucide-react";
import { useMyContext } from "@/hooks/useMyContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const {theme} = useMyContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* left section  */}
      <div className="flex items-center justify-center p-6 order-2 md:order-1">
        <div className="flex flex-col items-start gap-5">
          <div className={`${theme?"text-green-900":"text-white"} text-4xl font-bold`}>
            Track your expenses with <br />
            <span className="text-green-500 flex items-center">
              Decent Expense
              <IndianRupee className="font-bold size-9" />
            </span>
          </div>
          <Button onClick={()=>navigate("/dashboard")}>
            Explore More <ChevronsRight className="" />
          </Button>
          <p className="text-gray-400 flex ">
            You just live your life we are therefore manage your expenses&nbsp;
            <ChartNoAxesCombined />{" "}
          </p>
        </div>
      </div>

      {/* right svg section  */}
      <div className="flex items-center justify-center p-6 order-1 md:order-2">
        <img src="lendingFinance.png" alt="" className="w-120" />
      </div>
    </div>
  );
};

export default LandingPage;
