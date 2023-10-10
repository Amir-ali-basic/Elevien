import { IColumnProps } from "devextreme-react/data-grid";
import { formatDxGridTime } from "../libs/formatting";

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
      {
        caption: "firstName",
        dataField: "firstName",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
      {
        caption: "discipline",
        dataField: "discipline",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
      {
        caption: "programName",
        dataField: "programName",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
      {
        caption: "categoryName",
        dataField: "categoryName",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
      {
        caption: "teamName",
        dataField: "teamName",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
      {
        caption: "status",
        dataField: "status",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        cellTemplate: "custom-template-2",
        allowSorting: false,
      },
      {
        caption: "date",
        dataField: "date",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        customizeText: formatDxGridTime,
        allowSorting: false,
      },
      {
        caption: "actions",
        dataField: "actions",
        dataType: "string",
        alignment: "left",
        allowReordering: false,
        allowSorting: false,
      },
    ];
    return this.columns;
  }
}
