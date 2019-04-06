import React from "react";
import DatePicker from 'react-datepicker';
export default DateTimeInput = (props) => {
  const { configuration, defaultValue } = props;
  const specificProps = { placeholderText: configuration.placeholder, dateFormat: configuration.dateTimeFormat }
  if(configuration.disabled) {
    specificProps['disabled'] = true;
    specificProps['openToDate'] = configuration.openToDate ? configuration.openToDate : new Date();
  }

  const inputEvents = {
    onChange: props.onChange,
    onBlur: props.onBlur,
    onFocus: props.onFocus
  }

  return (
      <DatePicker
          className={configuration.className}
          {...specificProps}
          {...inputEvents}
          selected={defaultValue}
          isClearable={true}
      />
  );
}
