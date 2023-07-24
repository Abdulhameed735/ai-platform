import {
  LayoutDashboardIcon,
  MessageSquareIcon,
  ImageIcon,
  VideoIcon,
  MusicIcon,
  CodeIcon,
  Settings,
} from "lucide-react";

const routes = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    name: "Conversation",
    icon: MessageSquareIcon,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    name: "Music Genration",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    name: "Image generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    name: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },

  {
    name: "Code Genration",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-700",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default routes;
