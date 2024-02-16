import React, { useState } from "react";

const CustomSelect = ({ options, defaultValue, icon, onChange, arrow, bg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md ">
          <button
            type="button"
            className={`inline-flex justify-center w-full rounded-md  px-4 py-2 bg-[${bg}] text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150`}
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleDropdown}
          >
            {icon && <span className="mr-2">{React.createElement(icon)}</span>}
            {options.find((option) => option.value === selectedValue)?.label ||
              "Select an option"}
            {arrow && (
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className=" z-[99] origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                className="flex justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
                onClick={() => selectOption(option.value)}
              >
                {icon && (
                  <span className="mr-2">{React.createElement(icon)}</span>
                )}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
