
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const MemberCard = ({ name, role, imageUrl }: MemberCardProps) => {
  const initials = name
    .split(" ")[0]
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <Avatar className="h-16 w-16 mx-auto mb-2">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback className="bg-purple-200 text-purple-700">{initials}</AvatarFallback>
      </Avatar>
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};
