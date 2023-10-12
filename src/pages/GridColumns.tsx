import { IColumnProps } from "devextreme-react/data-grid";
import { formatDxGridTime } from "../libs/formatting";
import StatusCell from "../components/StatusCell/StatusCell";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import NameCell from "../components/NameCell/NameCell";
import { NameCellModel } from "../models/NameCellModel";

export class GridColumns {
  columns: IColumnProps[];
  cancelButtonHandler: () => void;
  requestRemovalButtonHandler: () => void;

  constructor(
    cancelButtonHandler: () => void,
    requestRemovalButtonHandler: () => void
  ) {
    this.columns = [];
    this.cancelButtonHandler = cancelButtonHandler;
    this.requestRemovalButtonHandler = requestRemovalButtonHandler;
    this.getDefaultColumns();
  }

  public getDefaultColumns(): IColumnProps[] {
    this.columns = [
      //fix all column widths
      {
        caption: "Name",
        dataField: "firstName",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
        width: "20%",
        cellTemplate: (container, options) => {
          const data = new NameCellModel(options.data);

          const root = createRoot(container);
          root.render(<NameCell {...data} />);
        },
      },
      {
        caption: "Discipline",
        dataField: "discipline",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
        width: "10%",
      },
      {
        caption: "Program",
        dataField: "programName",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
      {
        caption: "Category",
        dataField: "categoryName",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
      {
        caption: "Team",
        dataField: "teamName",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
      {
        caption: "Status",
        dataField: "status",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
        cellTemplate: (container, options) => {
          const data = options.data.status;

          const root = createRoot(container);
          root.render(<StatusCell status={data} />);
        },
      },
      {
        caption: "Date",
        dataField: "date",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        customizeText: formatDxGridTime,
        allowSorting: false,
      },
      {
        caption: "",
        type: "buttons",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
        width: "15%",
        buttons: [
          {
            name: "delete",
            visible: (rowData) => {
              return rowData.row?.data.status === "applied";
            },
            template: `Request Removal`,
            cssClass: "grid-row-button",
            onClick: this.requestRemovalButtonHandler,
          },
          {
            name: "cancel",
            visible: (rowData) =>
              rowData.row?.data.status === "awaiting response",
            template: `Cancel`,
            cssClass: "grid-row-button",
            onClick: this.cancelButtonHandler,
          },
        ],
      },
    ];
    return this.columns;
  }
}
