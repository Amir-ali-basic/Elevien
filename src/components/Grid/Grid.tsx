import React, { useEffect, useRef } from "react";
import DataGrid, { MasterDetail } from "devextreme-react/data-grid";
import "./grid.css";
import CustomButton from "../common/Button/Button";
import Status from "../Status/Status";
import { StatusType } from "../../types/StatusType";
import DataSource from "devextreme/data/data_source";
import NoDataComponent from "../NoDataComponent/NoDataComponent";

interface GridProps {
  title?: string;
  buttonText: string;
  status: StatusType;
  dataSource: DataSource;
  columns: any;
  showMasterDetail?: boolean;
  masterGridComponent?: React.ComponentType<any>;
  filters: React.ReactNode;
  allowColumnResizing?: boolean;
  totalCount: number;
  addNewAction?: () => void;
  noDataActionButton?: () => void;
  initialized?: (ref: any) => void;
}

//multiple buttons can be added
function Grid(props: GridProps) {
  const isClosed = props.status === "Closed";
  const gridRef = useRef(null);
  const { initialized } = props;
  const renderRequestCount = (count: number) => {
    if (count === 0) {
      return null;
    }
    return <h3>All request ({count})</h3>;
  };

  useEffect(() => {
    if (initialized) {
      initialized(gridRef);
    }
  }, [initialized, gridRef]);

  return (
    <div className="gridContainer">
      {/*TODO: namjesti visinu grida jer nemamo paging */}
      <div className="grid-header">
        <h1 className="title">{props.title}</h1>
        <div className="grid-header-actions">
          <CustomButton
            text={props.buttonText}
            onClick={props.addNewAction}
            disabled={isClosed}
          />
          <Status status={props.status}></Status>
        </div>
      </div>
      <div className="line"></div>
      {isClosed ? (
        <div className="closed-competioton-message">
          <h1>This competition is closed!</h1>
        </div>
      ) : (
        <>
          <div className="grid-filters">{props.filters}</div>
          {renderRequestCount(props.totalCount)}
          {props.totalCount !== 0 ? (
            <DataGrid
              className="custom-grid"
              dataSource={props.dataSource}
              columns={props.columns}
              allowColumnResizing={props.allowColumnResizing}
              rowAlternationEnabled={true}
              ref={gridRef}
            >
              <MasterDetail
                enabled={props.showMasterDetail}
                component={props.masterGridComponent}
              ></MasterDetail>
            </DataGrid>
          ) : (
            <NoDataComponent onClick={props.noDataActionButton} />
          )}
        </>
      )}
    </div>
  );
}

export default Grid;
