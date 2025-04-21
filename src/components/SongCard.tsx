
interface SongCardProps {
  title: string;
  year: string;
  description: string;
}

export const SongCard = ({ title, year, description }: SongCardProps) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold text-purple-700">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{year}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};
