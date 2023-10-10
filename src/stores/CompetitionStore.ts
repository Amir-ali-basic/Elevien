import { makeAutoObservable } from "mobx";
import { GridColumns } from "../pages/GridColumns";

class CompetitionStore {
  amir: string;
  application: any;
  gridColumns: GridColumns;

  constructor() {
    makeAutoObservable(this);
    this.amir = "string";
    this.gridColumns = new GridColumns(
      this.gridCancelClickHandler,
      this.gridRequestRemovalClickHandler
    );
  }

  gridCancelClickHandler() {
    console.log("gridCancelClickHandler");
  }

  gridRequestRemovalClickHandler() {
    console.log("gridRequestRemovalClickHandler");
  }
}

const competitionStore = new CompetitionStore();
export default competitionStore;
