export class ApplicationModel {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
  phone: string;
  discipline: string;
  programName: string;
  categoryName: string;
  teamName: string;
  status: string;
  date: string;
  club: string;
  dateOfBirth: string;

  constructor(data?: ApplicationModel) {
    this.id = data?.id ? data.id : "";
    this.firstName = data?.firstName ? data.firstName : "";
    this.lastName = data?.lastName ? data.lastName : "";
    this.country = data?.country ? data.country : "";
    this.phone = data?.phone ? data.phone : "";
    this.discipline = data?.discipline ? data.discipline : "";
    this.programName = data?.programName ? data.programName : "";
    this.categoryName = data?.categoryName ? data.categoryName : "";
    this.programName = data?.programName ? data.programName : "";
    this.teamName = data?.teamName ? data.teamName : "";
    this.status = data?.status ? data.status : "";
    this.date = data?.date ? data.date : "";
    this.club = data?.club ? data.club : "";
    this.dateOfBirth = data?.dateOfBirth ? data.dateOfBirth : "";
  }
}
