import { makeAutoObservable } from "mobx";
import { GridColumns } from "../pages/GridColumns";
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";
import { dataSourceMock } from "../mocks/dataSource";
import { ApplicationModel } from "../models/ApplicationModel";
import { MasterDetailModel } from "../models/MaterDetailModel";
import { validationSchema } from "../components/ApplicationForm/FormValidation";
// import { getAllApplications } from "../services/services.api";
import { NotifyService } from "../services/NotifyService";
import React from "react";
import { getAllApplications, getAllCountries } from "../services/services.api";
import { CountryModel } from "../models/CountryModel";
import { countriesList } from "../mocks/countryList";

class CompetitionStore {
  application: ApplicationModel;
  allApplications: ApplicationModel[];
  gridDataSource: DataSource;
  dataGridRef: React.RefObject<any>;
  gridColumns: GridColumns;
  masterDetails: MasterDetailModel[];
  applicationModalVisibility: boolean;
  haveApiError: boolean;
  notifyService: NotifyService;
  originalApplications: ApplicationModel[];
  countriesList: CountryModel[];

  constructor() {
    makeAutoObservable(this);

    this.gridColumns = new GridColumns(
      this.gridCancelClickHandler,
      this.gridRequestRemovalClickHandler
    );
    this.dataGridRef = React.createRef();
    this.application = new ApplicationModel();
    this.gridDataSource = new DataSource({
      store: new CustomStore({
        load: (options: any) => {
          return new Promise((resolve) => {
            resolve({
              data: this.allApplications.map((item: any) => item),
              totalCount: this.allApplications.length, //need to be fixed
            });
          });
        },
      }),
    });
    this.allApplications = [];
    this.countriesList = [];
    this.originalApplications = dataSourceMock.map(
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

    this.loadData();
    this.getCountriesList();
    makeAutoObservable(this.application);
  }

  async loadData() {
    try {
      // Simulate data loading, replace this with your actual data loading logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.allApplications = dataSourceMock.map(
        (item: any) => new ApplicationModel(item)
      );
      this.gridDataSource.reload();
    } catch (error) {
      // Handle the error
      console.error("Error loading data:", error);
    }
  }

  saveGridRef(newGridTemplateRef: any) {
    // this.dataGridRef = newGridTemplateRef;
    this.dataGridRef = newGridTemplateRef;
  }

  gridCancelClickHandler() {
    getAllApplications().then((res) => {
      console.log("res", res);
    });
  }

  // loadData() {
  //   getAllApplications().then((res) => {
  //     this.allApplications = res.map((application: ApplicationModel) => {
  //       return new ApplicationModel(application);
  //     });
  //   });
  // }

  // getCountriesList() {
  //   getAllCountries().then((res) => {
  //     console.log("res", res);
  //     this.countriesList = res.map((country: CountryModel) => {
  //       return new CountryModel(country);
  //     });
  //   });
  // }

  getCountriesList() {
    this.countriesList = countriesList;
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

  formSubmit() {
    validationSchema
      .validate(this.application, { abortEarly: false })
      .then((valid) => {
        if (valid) {
          // POST
          this.notifyService.showSuccess(
            "Your data has been successfully submitted."
          );
          console.log(
            "post model",
            this.application.toCreateCommand(this.application)
          );
          this.resetApplicationModel();
          this.hideApplicationModal();
        }
      })
      .catch((errors) => {
        if (errors.inner) {
          errors.inner.forEach((error: any) => {
            this.notifyService.showError(error.message);
          });
        } else {
          this.notifyService.showError("Validation errors occurred.");
        }
      });
  }
}

const competitionStore = new CompetitionStore();
export default competitionStore;
