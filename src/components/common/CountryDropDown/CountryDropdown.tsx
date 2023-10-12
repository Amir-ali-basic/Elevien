import React, { useState } from "react";
import DxSelectBox from "devextreme-react/select-box";
import { ValueChangedEvent } from "devextreme/ui/drop_down_box";
import "../../../assets/inputs.css";
import { CountryModel } from "../../../models/CountryModel";

interface CountryDropdownProps {
  label?: string;
  value: string;
  countries: CountryModel[];
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
  const itemTemplate = (data: CountryModel) => (
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
      <p className="input-label">{props.label}</p>
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
