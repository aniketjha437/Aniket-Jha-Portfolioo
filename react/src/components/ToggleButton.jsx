import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;

    if (isOn) {
      body.style.background = "#f4f4f5";
      body.style.color = "#2e4155";
    } else {
      body.style.background = "#0f172a";
      body.style.color = "bisque";
    }
  }, [isOn]);

  return (
    <div
      className="bg-orange-300 p-3 px-8 rounded-4xl text-black cursor-pointer"
      onClick={handleToggleSwitch}
    >
      <button>{isOn ? "DARK" : "LIGHT"}</button>
    </div>
  );
};

export default ToggleButton;
