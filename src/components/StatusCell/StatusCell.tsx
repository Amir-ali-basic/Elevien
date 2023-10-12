import React from "react";
import "../../assets/statusCell.css";

export interface StatusCellProps {
  status: string;
}

const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
  const getStatusClass = () => {
    //should create enum for statuses
    switch (status) {
      case "canceled":
        return "canceled";
      case "applied":
        return "applied";
      case "declined":
        return "declined";
      case "awaiting response":
        return "awaiting-response";
      default:
        return "";
    }
  };
  const statusClass = getStatusClass();

  return (
    <div className="status-cell">
      <span className={`${statusClass}`}>{status.toLocaleUpperCase()}</span>
    </div>
  );
};

export default StatusCell;
