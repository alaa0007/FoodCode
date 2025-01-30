import { View } from 'lucide-react';

interface ModelCardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}

export function ModelCard({ title, imageUrl, onClick }: ModelCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          <View size={20} />
          Voir en AR
        </button>
      </div>
    </div>
  );
}