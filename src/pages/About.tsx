import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Info, Mail } from "lucide-react";

const About = () => {
  return (
    <Card className="bg-green-50">
      <CardHeader>
        <CardTitle className="text-green-900 flex items-center gap-3 font-bold text-2xl">
          About <Info />
        </CardTitle>
        <CardDescription>All about Decent Expence</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 px-5 text-green-900">
        <p className="text-base">
          DecentExpense is a modern, full-stack finance tracker designed to make
          managing your money simple, clear, and effective. Whether you're
          tracking your daily expenses or analyzing long-term financial trends,
          DecentExpense gives you the tools to stay in control of your finances.
        </p>
        <p className="text-base">
          The platform allows users to add income (like salary) and expenses,
          categorize transactions, and instantly view insights such as total
          spending, category-wise breakdown, monthly trends, and net balance.
          With interactive charts and a clean, responsive interface, users can
          easily understand where their money is going and make better financial
          decisions.
        </p>
        <p className="text-base">
          DecentExpense also includes role-based access, where admins can manage
          users and oversee the platform, while users (analysts) have full
          control over their financial data — including adding, editing,
          deleting, and tracking their progress over time.
        </p>
        <p className="text-base">
          The goal of DecentExpense is simple: to help you understand your
          finances better and make smarter financial decisions with ease.
        </p>
      </CardContent>
      <CardFooter>
        <Mail />&nbsp;
        Contact for more &nbsp;
        <span className="text-green-600">dushyantvelar@gmail.com</span>
      </CardFooter>
    </Card>
  );
};

export default About;
