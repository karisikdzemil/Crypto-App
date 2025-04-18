import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Toast({ message, duration = 4000, onClose, redirectTo = '/' }) {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onClose) onClose();
          navigate(redirectTo);
          return 100;
        }
        return prev + 100 / (duration / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-[#2a2d38] text-white px-6 py-4 rounded-xl shadow-lg w-[300px] z-50 animate-fadeIn">
      <p className="text-sm">{message}</p>
      <div className="w-full bg-gray-700 mt-2 rounded-full h-1 overflow-hidden">
        <div
          className="bg-[#F0B90B] h-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
