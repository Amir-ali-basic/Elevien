import React from "react";
import "../../assets/status.css";
import { StatusType } from "../../types/StatusType";

interface StatusProps {
  status: StatusType;
}

function Status(props: StatusProps) {
  const getStatusColor = () => {
    switch (props.status) {
      case "Closed":
        return "var(--alert)";
      case "Open":
        return "var(--success)";
      default:
        // fix this later
        return "transparent";
    }
  };

  return (
    <div className="status">
      <div className="status-content">
        <div
          className="status-icon"
          style={{ backgroundColor: getStatusColor() }}
        ></div>
        <p className="text-sm">{props.status}</p>
      </div>
    </div>
  );
}

export default Status;
