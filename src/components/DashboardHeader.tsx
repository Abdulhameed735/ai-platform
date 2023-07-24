import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IDashboardHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

const DashboardHeader = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: IDashboardHeaderProps) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-6 h-6", iconColor)} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
