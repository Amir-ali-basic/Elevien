import React, { useState, ChangeEvent } from "react";
import DxSelectBox from "devextreme-react/select-box"; // Replace with the appropriate dropdown component
import { useEffect } from "react";
import { ValueChangedEvent } from "devextreme/ui/drop_down_box";

interface DropdownProps {
  label?: string;
  disabled?: boolean;
  showLabel?: boolean;
  value: string;
  items: string[];
  onValueChange: (newValue: string) => void;
}

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
      <span>{props.label}</span>
      <DxSelectBox
        disabled={props.disabled}
        value={selectedValue}
        items={props.items}
        onValueChanged={handleValueChange}
        width="100%"
      />
    </div>
  );
};

export default Dropdown;
