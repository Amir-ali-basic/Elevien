import React, { useState, useEffect } from "react";
import DxDateBox from "devextreme-react/date-box";
import { ValueChangedEvent } from "devextreme/ui/date_box";

interface DatePickerProps {
  label?: string;
  disabled?: boolean;
  showLabel?: boolean;
  value: string | undefined;
  placeholder: string;
  showDatePicker?: boolean;
  onDateChange: (newValue: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    props.value
  );

  useEffect(() => {
    setSelectedDate(props.value);
  }, [props.value]);

  const handleDateChange = (e: ValueChangedEvent) => {
    const newDate = e.value;
    setSelectedDate(newDate);
    props.onDateChange(newDate);
  };

  return (
    <div className="dx-field">
      <p className="input-label">{props.label}</p>
      <DxDateBox
        disabled={props.disabled}
        value={selectedDate}
        onValueChanged={handleDateChange}
        width="100%"
        placeholder={props.placeholder}
        showDropDownButton={props.showDatePicker || false}
      />
    </div>
  );
};
//TODO TREBA DODATI U SVIM KOMPOENTNAMA !!!!!
DatePicker.defaultProps = {
  showDatePicker: false,
};

export default DatePicker;
