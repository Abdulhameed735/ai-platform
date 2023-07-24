import DashboardHeader from "@/components/DashboardHeader";
import { VideoIcon } from "lucide-react";

const VideoPage = () => {
  return (
    <div>
      <DashboardHeader
        title="Video Generation"
        description="Our most advanced video conversation model"
        icon={VideoIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <h1>Video Page</h1>
    </div>
  );
};

export default VideoPage;
