import { Button } from "@/components/ui/button";
import { ChevronsRight, ChartNoAxesCombined, IndianRupee } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* left section  */}
      <div className="flex items-center justify-center p-6">
        <div className="flex flex-col items-start gap-5">
          <div className="text-gray-100 text-4xl font-bold">
            Track your expenses with <br />
            <span className="text-green-500 flex items-center">
              Decent Expense
              <IndianRupee className="font-bold size-9" />
            </span>
          </div>
          <Button>
            Explore More <ChevronsRight className="" />
          </Button>
          <p className="text-gray-400 flex ">
            You just live your life we are therefore manage your expenses&nbsp;
            <ChartNoAxesCombined />{" "}
          </p>
        </div>
      </div>

      {/* right svg section  */}
      <div className="flex items-center justify-center p-6">
        <img src="lendingFinance.png" alt="" className="w-120" />
      </div>
    </div>
  );
};

export default LandingPage;
