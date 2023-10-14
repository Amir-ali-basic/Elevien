import { ApplicationModel } from "../models/ApplicationModel";
import { CountryModel } from "../models/CountryModel";
import competitionStore from "../stores/CompetitionStore";
import { NotifyService } from "./NotifyService";

const notifyService = new NotifyService();

export function getAllApplications(): Promise<ApplicationModel[]> {
  return fetch("https://elevien-fe-job.free.beeceptor.com/applications")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Response is not OK");
      }
      return res.text();
    })
    .then((data) => {
      console.log("API Response:", data);
      return JSON.parse(data);
    })
    .then((jsonData) => {
      console.log("Parsed Data:", jsonData);
      return jsonData;
    })
    .catch((error) => {
      console.error("API Error:", error);
      notifyService.showError("API Error: " + error.message);
      competitionStore.haveApiError = true;
      throw error;
    });
}

export function getAllCountries(): Promise<CountryModel[]> {
  return fetch("https://elevien-fe-job.free.beeceptor.com/countries")
    .then((res) => {
      if (!res.ok) {
        competitionStore.haveApiError = true;
      }
      return res.json();
    })
    .then((data) => {
      console.log("API Response:", data);
      return data;
    })
    .catch((error) => {
      console.error("API Error:", error);
      notifyService.showError("API Error: " + error.message);
      throw error;
    });
}

export function postApplication(data: ApplicationModel): Promise<any> {
  return fetch("https://elevien-fe-job.free.beeceptor.com/application", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        competitionStore.haveApiError = true;
      }
      return res.json();
    })
    .then((response) => {
      console.log("POST API Response:", response);
      return response;
    })
    .catch((error) => {
      console.error("API Error:", error);
      notifyService.showError("API Error: " + error.message);
      throw error;
    });
}
