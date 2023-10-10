import { formatDate } from "../libs/formatting";
import { ApplicationModel } from "./ApplicationModel";

export class MasterDetailModel {
  dateOfBirth: string;
  phone: string;
  constructor(data?: ApplicationModel) {
    this.dateOfBirth = data?.dateOfBirth ? formatDate(data.dateOfBirth) : "";
    this.phone = data?.phone ? data.phone : "";
  }
}
