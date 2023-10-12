import { ApplicationModel } from "../models/ApplicationModel";
import { CountryModel } from "../models/CountryModel";
import competitionStore from "../stores/CompetitionStore";

export function getAllApplications(): Promise<ApplicationModel[]> {
  return fetch("https://elevien-fe-job.free.beeceptor.com/applications")
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
      throw error;
    });
}
