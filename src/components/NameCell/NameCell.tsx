import React from "react";
import { NameCellModel } from "../../models/NameCellModel";
import "../../assets/nameCell.css";

function NameCell(props: NameCellModel) {
  const flagSrc = `https://flagsapi.com/${props.country}/flat/64.png`;
  return (
    <div className="name-cell">
      <div className="text-sm">{`${props.firstName} ${props.lastName}`}</div>
      <div className="name-cell-additional-info">
        <img src={flagSrc} className="flag" alt="Flag" />
        <div className="text-xs">{props.club}</div>
      </div>
    </div>
  );
}

export default NameCell;
