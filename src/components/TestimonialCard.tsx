import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  company, 
  quote, 
  rating, 
  image 
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-shark-red-800/30 hover:border-shark-red-600/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover border-2 border-shark-red-500"
            />
          </div>
        )}
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-shark-red-400 fill-shark-red-400" : "text-gray-600"} 
          />
        ))}
      </div>
      
      <p className="text-gray-300 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;