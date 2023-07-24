import DashboardHeader from "@/components/DashboardHeader";
import { MusicIcon } from "lucide-react";

const MusicPage = () => {
  return (
    <div>
      <DashboardHeader
        title="Music Generation"
        description="Our most advanced music conversation model"
        icon={MusicIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <h1>Music Page</h1>
    </div>
  );
};

export default MusicPage;
