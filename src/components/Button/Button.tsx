import React, { Component } from "react";
import Button from "devextreme-react/button";
import "../../assets/button.css";

interface ButtonProps {
  disabled?: boolean;
  text: string;
  onClick?: () => void;
  primary?: boolean;
  className?: string; // Add a className prop to accept custom classes
}

class CustomButton extends Component<ButtonProps> {
  render() {
    const isDisabled =
      this.props.disabled === undefined ? false : this.props.disabled;

    const buttonClassName = this.props.primary
      ? "primary-button" // Use primary style
      : "secondary-button"; // Use secondary style

    // Concatenate the custom class with DevExtreme classes using dx-class
    const combinedClassName = `basic-button ${buttonClassName} ${
      this.props.className || "" // Use the provided className or an empty string
    }`;

    return (
      <Button
        disabled={isDisabled}
        className={combinedClassName}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </Button>
    );
  }
}

export default CustomButton;
