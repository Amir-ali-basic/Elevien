import React from "react";
import NoDataPlaceholder from "../../assets/images/NoDataPlaceholder.png";
import "../../assets/noDataComponent.css";
import CustomButton from "../Button/Button";

interface NoDataComponentProps {
  onClick?: () => void;
}

function NoDataComponent(props: NoDataComponentProps) {
  return (
    <div className="no-data-component">
      <img src={NoDataPlaceholder} alt="" />
      <h3>No applications yet</h3>
      <div className="text-sm">
        List of your requests will appear here when you add gymnasts.
      </div>
      <CustomButton
        text="Apply gymnasts"
        primary={false}
        onClick={props.onClick}
      />
    </div>
  );
}

export default NoDataComponent;
