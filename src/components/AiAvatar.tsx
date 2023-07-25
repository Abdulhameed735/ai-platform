import { Avatar, AvatarImage } from "@/components/ui/avatar";

const AiAvatar = () => {
  return (
    <Avatar className="w-8 h-8 cursor-cell">
      <AvatarImage
        src="https://s-i.huffpost.com/gen/1162422/images/o-AVATARS-SCHIZOPHRENIA-facebook.jpg"
        alt="ai avatar image"
      />
    </Avatar>
  );
};

export default AiAvatar;
