import DashboardHeader from "@/components/DashboardHeader";
import { ImageIcon } from "lucide-react";

const ImagePage = () => {
  return (
    <div>
      <DashboardHeader
        title="Image Generation"
        description="Our most advanced image generation model"
        icon={ImageIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <h1>Image Page</h1>
    </div>
  );
};

export default ImagePage;
