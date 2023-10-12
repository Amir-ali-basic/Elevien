import React, { useState } from "react";
import DxSelectBox from "devextreme-react/select-box";
import { useEffect } from "react";
import { ValueChangedEvent } from "devextreme/ui/drop_down_box";

interface DropdownProps {
  label?: string;
  disabled?: boolean;
  showLabel?: boolean;
  value: string;
  items: string[];
  placeholder: string;
  onValueChange: (newValue: string) => void;
}
//komponentu treba fixati da moze da radi sa nizom stringova, i da radi sa bilo kojim modelom, u slucaju da dodje
//nesto drugo sto nije niz stringova, onda display expresion mora biti obavezan unos
const Dropdown: React.FC<DropdownProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.value);

  useEffect(() => {
    setSelectedValue(props.value);
  }, [props.value]);

  const handleValueChange = (e: ValueChangedEvent) => {
    const newValue = e.value;
    setSelectedValue(newValue);
    props.onValueChange(newValue);
  };

  return (
    <div className="dx-field">
      <span className="input-label">{props.label}</span>
      <DxSelectBox
        disabled={props.disabled}
        value={selectedValue}
        items={props.items}
        onValueChanged={handleValueChange}
        width="100%"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Dropdown;
