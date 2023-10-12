export class NameCellModel {
  firstName: string;
  lastName: string;
  club: string;
  country: string;
  constructor(data?: any) {
    //fix any
    this.firstName = data?.firstName ? data.firstName : "";
    this.lastName = data?.lastName ? data.lastName : "";
    this.club = data?.club ? data.club : "";
    this.country = data?.country ? data.country : "";
  }
}
