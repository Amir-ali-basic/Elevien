import { ApplicationModel } from "./ApplicationModel";

export class MasterDetailModel {
  dateOfBirth: string;
  phone: string;
  constructor(data?: ApplicationModel) {
    this.dateOfBirth = data?.dateOfBirth ? data.dateOfBirth : "";
    this.phone = data?.phone ? data.phone : "";
  }
}
