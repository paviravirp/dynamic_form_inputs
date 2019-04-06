import React from 'react';
import { split, isEmpty, padEnd, clone, trimStart, get } from 'lodash';

export default MoneyInput = (props) => {
    const onBlur = (event) => {
        let input = event.target.value
        const moneyInput = split(event.target.value, '.');
        if(props.decimalPoints)
        {
            moneyInput[1] = (isEmpty(moneyInput[1])) ? '0' :  moneyInput[1];
            moneyInput[1] = padEnd(moneyInput[1], configuration.decimalPoints, '0');
        }
        if(isEmpty(moneyInput[1])) {
            input = moneyInput[0];
        }
        else {
            input = moneyInput[0] + '.' + moneyInput[1]
        }
        event.target.value = input;
        props.onBlur(event.target.value);
    };

    const validateInput = (event) => {
        let input = clone(event.target.value);
        input = trimStart(input.replace(configuration.validationRegex, ''), '0');
        if(!isEmpty(input))
        {
            const moneyInput = split(input, '.');
            if(!isEmpty(moneyInput[1])) {
                moneyInput[1] = (moneyInput[1] && moneyInput[1].length > configuration.decimalPoints) ? moneyInput[1].substring(0, props.decimalPoints) : moneyInput[1];
                input = moneyInput[0] + '.' + moneyInput[1];
            }
        }
        event.target.value = input;
    };

    const { configuration, defaultValue } = props;
    let specificProps = { maxLength: configuration.maxLength, placeholder: configuration.placeholder };
    if(get(configuration, 'validation.shouldValidate', false)) {
        inputEvents['onInput'] = validateInput;
    }
    if(configuration.disabled) {
        specificProps['disabled'] = true;
    }

    const inputEvents = {
        onChange: props.onChange,
        onBlur: onBlur,
        onFocus: props.onFocus
    }
    return (
        <span id="moneyInput">
            {configuration.prefix ? <span className={configuration.prefix.className}>{configuration.prefix.value}</span> : null} 
            <input defaultValue={defaultValue} {...specificProps} {...inputEvents} type="text" className={configuration.className} />
        </span>
    );
}

