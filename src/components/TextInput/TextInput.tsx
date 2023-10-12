import React, { useState, useEffect } from "react";
import DxTextBox from "devextreme-react/text-box";
import { ValueChangedEvent } from "devextreme/ui/text_box";

interface TextInputProps {
  label?: string;
  disabled?: boolean;
  showLabel?: boolean;
  readOnly?: boolean;
  value: string;
  placeholder?: string;
  maxLength?: string;
  onValueChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [modelValue, setModelValue] = useState(props.value);

  useEffect(() => {
    setModelValue(props.value);
  }, [props.value]);

  const emitValue = (e: ValueChangedEvent) => {
    const newValue = e.value;
    setModelValue(newValue);
    props.onValueChange(newValue);
  };

  return (
    <div className="dx-field">
      <span>{props.label}</span>
      <DxTextBox
        disabled={props.disabled}
        readOnly={props.readOnly}
        value={modelValue}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onValueChanged={emitValue}
        width="100%"
      />
    </div>
  );
};

export default TextInput;
