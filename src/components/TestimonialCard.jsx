import { FiStar } from 'react-icons/fi';

function TestimonialCard({ name, rating, review, location }) {
  return (
    <div className="card bg-blue-50  h-[210px]">
      <div className="flex items-center mb-2">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-yellow-500 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">"{review}"</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
