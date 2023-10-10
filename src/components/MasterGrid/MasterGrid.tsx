import React from "react";
import "../../assets/masterGrid.css";
import { MasterDetailModel } from "../../models/MaterDetailModel";

function MasterGrid(props: MasterDetailModel) {
  return (
    <div className="master-grid">
      <div className="master-grid-content">
        <div className="master-grid-line"></div>
        <div className="master-grid-additional-info">
          <div className="master-grid-date-of-birth">
            <div className="text-sm-bold">Date of birth:</div>
            <div className="text-sm">{props.dateOfBirth}</div>
          </div>
          <div className="master-grid-phone-number">
            <div className="text-sm-bold">Phone number:</div>
            <div className="text-sm">{props.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterGrid;
