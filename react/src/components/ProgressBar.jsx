import { useEffect, useState } from "react";

const SkillBar = ({ label, percentage }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(`${percentage}%`);
    }, 200); // Delay for animation

    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="mb-6">
      {/* Label + Percentage */}
      <div className="flex justify-between mb-1">
        <span className="text-white-800 font-medium">{label}</span>
        <span className="text-white-800 font-medium">{percentage}%</span>
      </div>

      {/* Progress Background */}
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
