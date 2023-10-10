import React from "react";
import DataGrid, { MasterDetail } from "devextreme-react/data-grid";
import "./grid.css";
import CustomButton from "../Button/Button";
import Status from "../Status/Status";
import { StatusType } from "../../types/StatusType";

interface GridProps {
  title?: string;
  buttonText: string;
  status: StatusType;
  requestNumber?: number;
  dataSource: any;
  columns: any;
  showMasterDetail?: boolean;
  masterGridComponent?: React.ComponentType<any>;
  filters?: React.ReactNode;
}

//multiple buttons can be added
function Grid(props: GridProps) {
  // Funkcija koja prikazuje ili sakriva h3 na osnovu broja u dataSource
  const renderRequestCount = (count: number) => {
    if (count === 0) {
      return null;
    }
    return <h3>All request ({count})</h3>;
  };

  return (
    <div>
      {/* treba narpaviti komponente */}
      <div className="grid-header">
        <h1 className="title">{props.title}</h1>
        <div className="grid-header-actions">
          <CustomButton text={props.buttonText} />
          <Status status={props.status}></Status>
        </div>
      </div>
      <div>{props.filters}</div>
      {renderRequestCount(props.dataSource.length)}
      <DataGrid
        className="custom-grid"
        dataSource={props.dataSource}
        columns={props.columns}
        showBorders={false}
      >
        <MasterDetail
          enabled={props.showMasterDetail}
          component={props.masterGridComponent}
        ></MasterDetail>
      </DataGrid>
    </div>
  );
}

export default Grid;
