import React, { useState } from "react";
import DxSelectBox from "devextreme-react/select-box";
import { ValueChangedEvent } from "devextreme/ui/drop_down_box";
import "../../assets/inputs.css";

interface Country {
  cognitoId: string;
  code: string;
  name: string;
  phoneCode: string;
  flag: string;
}

interface CountryDropdownProps {
  label?: string;
  value: string;
  countries: Country[];
  onValueChange: (newValue: string) => void;
}

const CountryDropdown: React.FC<CountryDropdownProps> = (props) => {
  const [selectedCountry, setSelectedCountry] = useState(props.value);

  const handleValueChange = (e: ValueChangedEvent) => {
    const newValue = e.value;
    setSelectedCountry(newValue);
    props.onValueChange(newValue);
  };

  // Custom item template for the dropdown
  const itemTemplate = (data: Country) => (
    <div className="custom-country-item">
      <img
        src={`https://www.countryflagicons.com/FLAT/64/${data.code}.png`}
        height="24px"
        width="24px"
        alt={data.name}
        className="country-flag"
      />
      <span>{data.name}</span>
    </div>
  );

  // Custom value rendering for the selected value
  const valueRender = (data: Country) => (
    <div className="custom-country-item">
      <img
        src={`https://www.countryflagicons.com/FLAT/64/${data.code}.png`}
        height="24px"
        width="24px"
        alt={data.name}
        className="country-flag"
      />
      <span>{data.name}</span>
    </div>
  );

  return (
    <div className="dx-field">
      <span>{props.label}</span>
      <DxSelectBox
        value={selectedCountry}
        items={props.countries}
        onValueChanged={handleValueChange}
        displayExpr="name"
        valueExpr="name"
        itemRender={itemTemplate}
        width="100%"
      />
    </div>
  );
};

export default CountryDropdown;
