import DashboardHeader from "@/components/DashboardHeader";
import { Settings } from "lucide-react";

const SettingsPage = async () => {
  return (
    <div>
      <DashboardHeader
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
    </div>
  );
};

export default SettingsPage;
