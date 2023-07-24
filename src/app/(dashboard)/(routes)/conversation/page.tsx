import DashboardHeader from "@/components/DashboardHeader";
import { MessageSquareIcon } from "lucide-react";

const ConversationPage = () => {
  return (
    <div>
      <DashboardHeader
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquareIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div className="px-4 lg:px-8"></div>
    </div>
  );
};

export default ConversationPage;
