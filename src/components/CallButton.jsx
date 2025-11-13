import { FaPhoneAlt } from 'react-icons/fa';

function CallButton() {
  const phoneNumber = '+919291488856'; // add country code

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-50 hover:scale-110 animate-bounce"
      aria-label="Call Us"
    >
      <FaPhoneAlt size={24} />
    </button>
  );
}

export default CallButton;
