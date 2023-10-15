import React from "react";

import "../../../assets/button.css";

interface CustomButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  cancel?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  primary,
  secondary,
  cancel,
  onClick,
  disabled,
  className,
}) => {
  const buttonClass = primary
    ? "primary-button"
    : secondary
    ? "secondary-button"
    : cancel
    ? "cancel-button"
    : "";

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  //css za disabled
  return (
    <button
      className={`custom-button ${buttonClass} ${className || ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
