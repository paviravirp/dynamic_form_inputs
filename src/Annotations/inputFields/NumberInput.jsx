import React from 'react';

export default NumberInput = (props) => {
    const { configuration, defaultValue } = props;

    const inputEvents = {
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus
    };

    const specificProps = {  placeholder: configuration.placeholder };

    if(get(configuration, 'validation.shouldValidate')) {
        specificProps['min'] = get(configuration, 'validation.minimumValue');
        specificProps['max'] = get(configuration, 'validation.maximumValue');
    }

    return (
        <input type="number" {...specificProps} {...inputEvents} className={configuration.className} defaultValue={defaultValue}/>
    );
}

