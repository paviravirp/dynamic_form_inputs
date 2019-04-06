import React from 'react';
import Select from 'react-select';

export default MonthDropDown = (props) => {
    const { configuration, defaultValue } = props;
    const constructOptions = () => {
        return Array.from(Array(12), (value, index) => {
            return { 'label': index, 'value': index }
        });
    }

    onChange = (event) => {
        props.onChange(event.value);
    }

    const specificProps = { placeholder: configuration.placeholder }

    const inputEvents = {
        onChange: onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus
    }

    return (
        <Select
            {...specificProps}
            {...inputEvents}
            defaultValue={{ 'label': defaultValue, 'value': defaultValue }}
            className={configuration.className}
            options={constructOptions}
        />
    );
}
