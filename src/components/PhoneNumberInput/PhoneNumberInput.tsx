import { useState, useEffect } from "react";
import DxSelectBox from "devextreme-react/select-box";
import TextInput from "../TextInput/TextInput";
import { CountryModel } from "../../models/CountryModel";
import "../../assets/phoneNumberInput.css";

interface PhoneNumberInputProps {
  label: string;
  countries: CountryModel[];
  value: string;
  onValueChange: (newValue: {
    selectedCountry: CountryModel | null;
    phoneNumber: string;
    fullPhoneNumber: string;
  }) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (props) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryModel | null>(
    null
  );
  const [phoneNumber, setPhoneNumber] = useState<string>(props.value || "");

  // Extract the phone code and set the selected country when the component mounts
  useEffect(() => {
    const countryByPhoneCode = props.countries.find((country) =>
      props.value.startsWith(country.phoneCode)
    );

    if (countryByPhoneCode) {
      setSelectedCountry(countryByPhoneCode);
    }
  }, [props.countries, props.value]);

  const handleCountryChange = (newCountry: CountryModel | null) => {
    setSelectedCountry(newCountry);

    const fullPhoneNumber = newCountry
      ? `${newCountry.phoneCode}${phoneNumber}`
      : phoneNumber;

    props.onValueChange({
      selectedCountry: newCountry,
      phoneNumber,
      fullPhoneNumber,
    });
  };

  const handlePhoneNumberChange = (newPhoneNumber: string | undefined) => {
    const phoneNumberValue = newPhoneNumber || "";
    setPhoneNumber(phoneNumberValue);

    const fullPhoneNumber = selectedCountry
      ? `${selectedCountry.phoneCode}${phoneNumberValue}`
      : phoneNumberValue;

    props.onValueChange({
      selectedCountry,
      phoneNumber: phoneNumberValue,
      fullPhoneNumber,
    });
  };

  return (
    <div className="dx-field phone-number-input-dropdown">
      <p className="input-label">{props.label}</p>
      <div className="phone-number-input-continaer">
        <div className="phone-code-dropdown">
          <DxSelectBox
            value={selectedCountry}
            items={props.countries}
            onValueChange={handleCountryChange}
            placeholder="Code"
            displayExpr="phoneCode"
            showDropDownButton={false}
          />
        </div>
        <div className="phone-number-input">
          <TextInput
            value={phoneNumber}
            onValueChange={handlePhoneNumberChange}
            placeholder="Phone Number"
            showLabel={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberInput;
