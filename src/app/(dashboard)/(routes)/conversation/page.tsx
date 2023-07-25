"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { formSchema } from "./schema";
import DashboardHeader from "@/components/DashboardHeader";
import { Form, FormItem, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MessageSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import AiAvatar from "@/components/AiAvatar";

interface Message {
  id: string;
  role: string;
  content: string;
}

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const newMessage = { id: uuidv4(), role: "user", content: values.prompt };
      const newMessages = [...messages, newMessage];

      const response = await axios.post("/api/conversation", {
        prompt: values.prompt,
      });

      const aiResponse = {
        id: uuidv4(),
        role: "ai",
        content: response.data,
      };

      setMessages([...newMessages, aiResponse]);
      console.log(response.data);

      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
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

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              className="rounded-lg border w-full p-4 px-3 md:px-5 focus-within:shadow-sm grid grid-cols-12 gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visibe:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Ask me anything?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-4 mt-4 ">
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <span
                key={message.id}
                className={cn(
                  "p-3 md:p-4 lg:p-7 w-full flex items-start gap-x-3 md:gap-x-4 lg:gap-x-5 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <AiAvatar />}
                <p className="text-sm">{message.content}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
