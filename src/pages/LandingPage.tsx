import { Button } from "@/components/ui/button";
import { ChevronsRight,ChartNoAxesCombined,IndianRupee   } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex justify-around items-center mt-20">
      {/* left section  */}
      <div className="flex flex-col items-start gap-5">
        <div className="text-white text-4xl">
          Track your expenses  with <br />{" "}
          <span className="text-green-500 flex items-center">Decent Expense<IndianRupee className="font-bold size-9"/></span>
        </div>

        <Button>
          Explore More <ChevronsRight className="" />
        </Button>
        <p className="text-gray-300 flex ">You just live your life we are therefore manage your expenses&nbsp;<ChartNoAxesCombined/> </p>
      </div>

      {/* right svg section  */}
      <div className="">
        <img src="lendingFinance.png" alt="" className="w-120" />
      </div>
    </div>
  );
};

export default LandingPage;
