import React, { Component } from "react";
import Button from "devextreme-react/button";
import "../../assets/button.css";

interface ButtonProps {
  disabled?: boolean;
  text: string;
  onClick?: () => void;
}

class CustomButton extends Component<ButtonProps> {
  render() {
    const isDisabled =
      this.props.disabled === undefined ? false : this.props.disabled;

    return (
      <Button
        disabled={isDisabled}
        className="basic-button"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </Button>
    );
  }
}

export default CustomButton;
