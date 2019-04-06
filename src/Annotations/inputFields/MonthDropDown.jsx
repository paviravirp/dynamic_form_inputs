import React from 'react';
import Select from 'react-select';
import { times } from 'lodash';

export default MonthDropDown = (props) => {
    const { configuration, defaultValue } = props;
    const constructOptions = () => _.times(12, (value) => ({'label': ++value, 'value': value}));

    onChange = (event) => props.onChange(event.value);

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
