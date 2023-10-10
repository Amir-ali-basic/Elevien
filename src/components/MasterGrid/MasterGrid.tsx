import React from "react";
import "../../assets/masterGrid.css";
import { MasterDetailModel } from "../../models/MaterDetailModel";

function MasterGrid(props: any) {
  console.log("props", props.data.data); //TODO: FIXAJ OVO
  const data = new MasterDetailModel(props.data.data);
  return (
    <div className="master-grid">
      <div className="master-grid-content">
        <div className="master-grid-line"></div>
        <div className="master-grid-additional-info">
          <div className="master-grid-date-of-birth">
            <div className="text-sm-bold">Date of birth:</div>
            <div className="text-sm">{data.dateOfBirth}</div>
          </div>
          <div className="master-grid-phone-number">
            <div className="text-sm-bold">Phone number:</div>
            <div className="text-sm">{data.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterGrid;
