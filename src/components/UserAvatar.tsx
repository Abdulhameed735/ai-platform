import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className="w-8 h-8 cursor-pointer">
      <AvatarImage
        src={user?.profileImageUrl}
        alt={user?.firstName + " " + "image" || "user image"}
      />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
