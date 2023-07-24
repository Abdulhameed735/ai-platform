"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema";
import DashboardHeader from "@/components/DashboardHeader";
import { MessageSquareIcon } from "lucide-react";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

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
