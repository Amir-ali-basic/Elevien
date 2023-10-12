export class CountryModel {
  cognitoId: string;
  code: string;
  name: string;
  phoneCode: string;
  flag: string;
  constructor(data?: CountryModel) {
    this.cognitoId = data?.cognitoId ? data.cognitoId : "";
    this.code = data?.code ? data.code : "";
    this.name = data?.name ? data.name : "";
    this.phoneCode = data?.phoneCode ? data.phoneCode : "";
    this.flag = data?.flag ? data.flag : "";
  }
}
