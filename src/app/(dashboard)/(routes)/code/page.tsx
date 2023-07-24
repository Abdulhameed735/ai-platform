import DashboardHeader from "@/components/DashboardHeader";
import { CodeIcon } from "lucide-react";

const CodePage = () => {
  return (
    <div>
      <DashboardHeader
        title="Code Generation"
        description="Our most advanced code conversation model"
        icon={CodeIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <h1>Code Page</h1>
    </div>
  );
};

export default CodePage;
