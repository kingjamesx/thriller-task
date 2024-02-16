import React, { useState, useEffect, useRef } from "react";

const RangeSlider = () => {
  const [leftValue, setLeftValue] = useState(500);
  const [rightValue, setRightValue] = useState(900);
  const leftInputRef = useRef(null);
  const rightInputRef = useRef(null);

  useEffect(() => {
    const handleLeftInput = (e) => {
      const newValue = Math.min(parseInt(e.target.value), rightValue - 1);
      setLeftValue(newValue);
    };

    const handleRightInput = (e) => {
      const newValue = Math.max(parseInt(e.target.value), leftValue + 1);
      setRightValue(newValue);
    };

    if (leftInputRef.current) {
      leftInputRef.current.addEventListener("input", handleLeftInput);
    }

    if (rightInputRef.current) {
      rightInputRef.current.addEventListener("input", handleRightInput);
    }

    return () => {
      if (leftInputRef.current) {
        leftInputRef.current.removeEventListener("input", handleLeftInput);
      }

      if (rightInputRef.current) {
        rightInputRef.current.removeEventListener("input", handleRightInput);
      }
    };
  }, [leftValue, rightValue]);

  const leftPercentage = ((leftValue - 100) * 100) / 1400;
  const rightPercentage = ((rightValue - 100) * 100) / 1400;

  return (
    <div className="relative w-full h-8">
      <input
        type="range"
        min="100"
        max="1500"
        value={leftValue}
        ref={leftInputRef}
        readOnly
        className="absolute left-0 w-full h-full opacity-0 cursor-pointer "
      />
      <input
        type="range"
        min="100"
        max="1500"
        value={rightValue}
        ref={rightInputRef}
        readOnly
        className="absolute left-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div
        className="absolute h-1 bg-[#587472] rounded-full top-4 "
        style={{ width: `${leftPercentage}%` }}
      />
      <div
        className="absolute h-1 bg-[#587472] rounded-full top-4 "
        style={{ width: `${100 - rightPercentage}%`, right: "0" }}
      />
      <div
        className="absolute h-1 bg-[#587472] top-4 rounded-full"
        style={{
          left: `${leftPercentage}%`,
          right: `${100 - rightPercentage}%`,
        }}
      />
      <div
        className="absolute top-1/2 w-4 h-4 bg-[#C99C33] rounded-full shadow-md cursor-pointer -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${leftPercentage}%` }}
      >
        <span className="arrow-up"></span>
        <div className="absolute top-14 left-1/2 -mt-6 px-3 py-1 bg-[#C99C33] text-white text-xs rounded-full -translate-x-1/2">
          ${leftValue}
        </div>
      </div>
      <div
        className="absolute top-1/2 w-4 h-4 bg-[#C99C33] rounded-full shadow-md cursor-pointer -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${rightPercentage}%` }}
      >
        <span className="arrow-up "></span>
        <div
          className="absolute top-14 left-1/2 -mt-6 px-3 py-1 bg-[#C99C33] text-white text-xs rounded-full -translate-x-1/2
        
        "
        >
          ${rightValue}
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
