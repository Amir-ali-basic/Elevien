import competitionStore from "../../stores/CompetitionStore";
import CountryDropdown from "../common/CountryDropDown/CountryDropdown";
import Dropdown from "../common/DropdownComponent/Dropdown";
import TextInput from "../common/TextInput/TextInput";
import "../../assets/form.css";
import DatePicker from "../common/DatePicker/DatePicker";
import PhoneNumberInput from "../common/PhoneNumberInput/PhoneNumberInput";
import { countriesList } from "../../mocks/countryList";
import { CategoriesAndPrograms } from "../../mocks/Categories";
import { observer } from "mobx-react";

const ApplicationForm = observer(() => {
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
            countries={countriesList}
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
            items={CategoriesAndPrograms}
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
              competitionStore.application.club = newValue;
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
              competitionStore.application.teamName = newValue;
            }}
            placeholder="Team"
          />
        </div>
      </div>
      <div className="row">
        <div className="aplication-form-phone-input">
          <PhoneNumberInput
            label="Phone (Optional)"
            countries={countriesList}
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
});

export default ApplicationForm;
