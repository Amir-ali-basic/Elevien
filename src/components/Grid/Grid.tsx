import React from "react";
import DataGrid, { MasterDetail } from "devextreme-react/data-grid";
import "./grid.css";
import CustomButton from "../Button/Button";
import Status from "../Status/Status";
import { StatusType } from "../../types/StatusType";
import DataSource from "devextreme/data/data_source";

interface GridProps {
  title?: string;
  buttonText: string;
  status: StatusType;
  dataSource: DataSource;
  columns: any;
  showMasterDetail?: boolean;
  masterGridComponent?: React.ComponentType<any>;
  filters?: React.ReactNode;
  allowColumnResizing?: boolean;
}

//multiple buttons can be added
function Grid(props: GridProps) {
  const renderRequestCount = (count: number) => {
    if (count === 0) {
      return null;
    }
    return <h3>All request ({count})</h3>;
  };

  console.log("props.masterGridComponent", props.masterGridComponent);

  return (
    <div>
      {/*TODO: treba narpaviti komponente */}
      {/*TODO: namjesti visinu grida jer nemamo paging */}
      <div className="grid-header">
        <h1 className="title">{props.title}</h1>
        <div className="grid-header-actions">
          <CustomButton text={props.buttonText} />
          <Status status={props.status}></Status>
        </div>
      </div>
      <div>{props.filters}</div>
      {renderRequestCount(props.dataSource.totalCount())}
      <DataGrid
        className="custom-grid"
        dataSource={props.dataSource}
        columns={props.columns}
        allowColumnResizing={props.allowColumnResizing}
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
