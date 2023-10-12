import competitionStore from "../../stores/CompetitionStore";
import CountryDropdown from "../CountryDropDown/CountryDropdown";
import Dropdown from "../DropdownComponent/Dropdown";
import TextInput from "../TextInput/TextInput";
import "../../assets/form.css";
import DatePicker from "../DatePicker/DatePicker";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";

function ApplicationForm() {
  const categories = [
    "Select Category",
    "Category 1",
    "Category 2",
    "Category 3",
  ];
  const countries = [
    {
      cognitoId: "114436de-e7a5-4534-b748-38afc7a9f1ba",
      code: "AF",
      name: "Afghanistan",
      phoneCode: "93",
      flag: "🇦🇫",
    },
    {
      cognitoId: "ce42d5d7-6f61-437b-b359-1a0e9e0c4d68",
      code: "AX",
      name: "Åland Islands",
      phoneCode: "35818",
      flag: "🇦🇽",
    },
    {
      cognitoId: "e36d7505-7dec-4d7a-a6d2-f503a9d7d1ac",
      code: "AL",
      name: "Albania",
      phoneCode: "355",
      flag: "🇦🇱",
    },
    {
      cognitoId: "ec3a03a3-985a-4724-803c-e43664366ced",
      code: "DZ",
      name: "Algeria",
      phoneCode: "213",
      flag: "🇩🇿",
    },
    {
      cognitoId: "db669e6f-01fb-401d-b520-d394127a07ef",
      code: "AS",
      name: "American Samoa",
      phoneCode: "1684",
      flag: "🇦🇸",
    },
    {
      cognitoId: "625dac46-cf93-44be-b501-381f5bf566fc",
      code: "AD",
      name: "Andorra",
      phoneCode: "376",
      flag: "🇦🇩",
    },
  ];

  return (
    <div className="application-form">
      <div className="row application-form-first-row">
        <div className="application-form-input">
          <TextInput
            showLabel={true}
            label="First Name"
            disabled={false}
            readOnly={false}
            value={competitionStore.application.firstName}
            onValueChange={(newValue) => {
              competitionStore.application.firstName = newValue;
            }}
            placeholder="First Name"
          />
        </div>
        <div className="application-form-input">
          <TextInput
            showLabel={true}
            label="Last Name"
            disabled={false}
            readOnly={false}
            value={competitionStore.application.firstName}
            onValueChange={(newValue: string) => {
              competitionStore.application.lastName = newValue;
            }}
            placeholder="Last Name"
          />
        </div>
        <div className="application-form-country">
          <CountryDropdown
            value={competitionStore.application.country}
            countries={countries}
            onValueChange={(newValue: string) => {
              competitionStore.application.country = newValue;
            }}
            label="Country"
          />
        </div>
      </div>
      <div className="row application-form-second-row">
        <div className="application-form-input">
          <Dropdown
            label="Program and category"
            value={competitionStore.application.categoryName}
            items={categories}
            placeholder="Program and category"
            onValueChange={(newValue: string) => {
              competitionStore.application.categoryName = newValue;
            }}
          />
        </div>
        <div className="application-form-date">
          <DatePicker
            label="Date of birht"
            value={competitionStore.application.dateOfBirth}
            placeholder="Enter date"
            onDateChange={(newValue: string) => {
              competitionStore.application.dateOfBirth = newValue;
            }}
          />
        </div>
      </div>
      <div className="row application-form-third-row">
        <div className="application-form-input">
          <TextInput
            showLabel={true}
            label="Club (Optional)"
            disabled={false}
            readOnly={false}
            value={competitionStore.application.club}
            onValueChange={(newValue: string) => {
              competitionStore.application.lastName = newValue;
            }}
            placeholder="Club"
          />
        </div>
        <div className="application-form-input">
          <TextInput
            showLabel={true}
            label="Team (Optional)"
            disabled={false}
            readOnly={false}
            value={competitionStore.application.teamName}
            onValueChange={(newValue: string) => {
              competitionStore.application.lastName = newValue;
            }}
            placeholder="Team"
          />
        </div>
      </div>
      <div className="row">
        <div className="aplication-form-phone-input">
          <PhoneNumberInput
            label="Phone (Optional)"
            countries={countries}
            value={competitionStore.application.phone}
            onValueChange={(newValue) => {
              competitionStore.application.phone = newValue.fullPhoneNumber;
            }}
          />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default ApplicationForm;
