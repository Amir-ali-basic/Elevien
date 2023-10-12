import { makeAutoObservable } from "mobx";
import { GridColumns } from "../pages/GridColumns";
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";
import { dataSourceMock } from "../mocks/dataSource";
import { ApplicationModel } from "../models/ApplicationModel";
import { MasterDetailModel } from "../models/MaterDetailModel";
import { validationSchema } from "../components/ApplicationForm/FormValidation";
import { getAllApplications } from "../services/services.api";
import { NotifyService } from "../services/NotifyService";

class CompetitionStore {
  application: ApplicationModel;
  allApplications: ApplicationModel[];
  gridDataSource: DataSource;
  gridColumns: GridColumns;
  masterDetails: MasterDetailModel[];
  applicationModalVisibility: boolean;
  haveApiError: boolean;
  notifyService: NotifyService;

  constructor() {
    makeAutoObservable(this);

    this.gridColumns = new GridColumns(
      this.gridCancelClickHandler,
      this.gridRequestRemovalClickHandler
    );
    this.application = new ApplicationModel();
    this.gridDataSource = new DataSource({
      store: new CustomStore({
        load: (options: any) => {
          return new Promise((resolve) => {
            resolve({
              data: dataSourceMock.map((item: any) => item),
              totalCount: dataSourceMock.length, //need to be fixed
            });
          });
        },
      }),
    });
    this.allApplications = dataSourceMock.map(
      (item: any) => new ApplicationModel(item)
    );
    this.masterDetails = this.allApplications.map(
      (application: ApplicationModel) => {
        return new MasterDetailModel(application);
      }
    );
    this.applicationModalVisibility = false;
    this.haveApiError = false;
    this.notifyService = new NotifyService();
    makeAutoObservable(this.application);
  }

  gridCancelClickHandler() {
    console.log("gridCancelClickHandler");
  }

  gridRequestRemovalClickHandler() {
    console.log("gridRequestRemovalClickHandler");
  }

  resetApplicationModel() {
    this.application = new ApplicationModel();
  }

  showApplicationModal() {
    this.applicationModalVisibility = true;
  }

  hideApplicationModal() {
    this.applicationModalVisibility = false;
  }

  abortButtonHandler() {
    this.resetApplicationModel();
    this.hideApplicationModal();
  }

  sendApplication() {
    validationSchema.isValid(this.application).then((res: any) => {
      if (res === false) {
        this.notifyService.showError("Please fill al field");
        return;
      }
      this.notifyService.showSuccess("Your data is sent");
      console.log(
        "post model",
        this.application.toCreateCommand(this.application)
      );
      this.resetApplicationModel();
      this.hideApplicationModal();
    });
  }
}

const competitionStore = new CompetitionStore();
export default competitionStore;
