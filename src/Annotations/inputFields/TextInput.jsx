import React from 'react';
import { clone } from 'lodash';

export default TextInput = (props) => {
    const { configuration, defaultValue } = props;
    const specificProps = { maxLength: configuration.maxLength, placeholder: configuration.placeholder };
    if(configuration.disabled) {
        specificProps['disabled'] = true;
    }

    const validateInput = (event) => {
        let input = clone(event.target.value);
        input = input.replace(get(configuration, 'validation.validationRegex'), '');
        event.target.value = input;
    };

    const inputEvents = {
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus
    }

    if(get(configuration, 'validation.shouldValidate', false)) {
        inputEvents['onInput'] = validateInput;
    }

    return(
        <input type='text' {...specificProps} value={defaultValue} className={configuration.className} {...inputEvents}></input>
    );
}
