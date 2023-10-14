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
import { FormValidation } from "./FormValidation";

const ApplicationForm = observer(() => {
  const formik = FormValidation({ onSubmit: competitionStore.formSubmit });

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
              formik.validateField("firstName");
              formik.setFieldValue(
                "firstName",
                competitionStore.application.firstName
              );
            }}
            placeholder="First Name"
          />
          {formik.errors.firstName ? (
            <span className="validation-error">{formik.errors.firstName}</span>
          ) : null}
        </div>
        <div className="application-form-input">
          <TextInput
            showLabel={true}
            label="Last Name"
            disabled={false}
            readOnly={false}
            value={competitionStore.application.lastName}
            onValueChange={(newValue: string) => {
              competitionStore.application.lastName = newValue;
              formik.setFieldValue(
                "lastName",
                competitionStore.application.lastName
              );
            }}
            placeholder="Last Name"
          />
          {formik.errors.lastName ? (
            <span className="validation-error">{formik.errors.lastName}</span>
          ) : null}
        </div>
        <div className="application-form-country">
          <CountryDropdown
            value={competitionStore.application.country}
            countries={countriesList}
            onValueChange={(newValue: string) => {
              competitionStore.application.country = newValue;
              formik.setFieldValue(
                "country",
                competitionStore.application.country
              );
            }}
            label="Country"
          />
          {formik.errors.country ? (
            <span className="validation-error">{formik.errors.country}</span>
          ) : null}
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
              formik.setFieldValue(
                "categoryName",
                competitionStore.application.categoryName
              );
            }}
          />
          {formik.errors.categoryName ? (
            <span className="validation-error">
              {formik.errors.categoryName}
            </span>
          ) : null}
        </div>
        <div className="application-form-date">
          <DatePicker
            label="Date of birht"
            value={competitionStore.application.dateOfBirth}
            placeholder="Enter date"
            onDateChange={(newValue: string) => {
              competitionStore.application.dateOfBirth = newValue;
              formik.setFieldValue(
                "dateOfBirth",
                competitionStore.application.dateOfBirth
              );
            }}
          />
          {formik.errors.dateOfBirth ? (
            <span className="validation-error">
              {formik.errors.dateOfBirth}
            </span>
          ) : null}
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
