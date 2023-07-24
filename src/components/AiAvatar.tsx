import { Avatar, AvatarImage } from "@/components/ui/avatar";

const AiAvatar = () => {
  return (
    <Avatar className="w-7 h-7">
      <AvatarImage
        src="https://s-i.huffpost.com/gen/1162422/images/o-AVATARS-SCHIZOPHRENIA-facebook.jpg"
        alt="ai avatar image"
      />
    </Avatar>
  );
};

export default AiAvatar;
