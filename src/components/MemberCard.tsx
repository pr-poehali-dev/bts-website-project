
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  birthDate: string;
}

export const MemberCard = ({ name, role, imageUrl, birthDate }: MemberCardProps) => {
  const initials = name
    .split(" ")[0]
    .substring(0, 2)
    .toUpperCase();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-[1.03]">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback className="bg-purple-200 text-purple-700">{initials}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-purple-600 mb-2">{role}</p>
        <p className="text-gray-500 text-sm">{birthDate}</p>
      </CardContent>
    </Card>
  );
};
