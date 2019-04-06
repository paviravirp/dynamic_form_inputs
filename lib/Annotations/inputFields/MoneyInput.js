'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

MoneyInput = function MoneyInput(props) {
    var onBlur = function onBlur(event) {
        var input = event.target.value;
        var moneyInput = (0, _lodash.split)(event.target.value, '.');
        if (props.decimalPoints) {
            moneyInput[1] = (0, _lodash.isEmpty)(moneyInput[1]) ? '0' : moneyInput[1];
            moneyInput[1] = (0, _lodash.padEnd)(moneyInput[1], configuration.decimalPoints, '0');
        }
        if ((0, _lodash.isEmpty)(moneyInput[1])) {
            input = moneyInput[0];
        } else {
            input = moneyInput[0] + '.' + moneyInput[1];
        }
        event.target.value = input;
        props.onBlur(event.target.value);
    };

    var validateInput = function validateInput(event) {
        var input = (0, _lodash.clone)(event.target.value);
        input = (0, _lodash.trimStart)(input.replace(configuration.validationRegex, ''), '0');
        if (!(0, _lodash.isEmpty)(input)) {
            var moneyInput = (0, _lodash.split)(input, '.');
            if (!(0, _lodash.isEmpty)(moneyInput[1])) {
                moneyInput[1] = moneyInput[1] && moneyInput[1].length > configuration.decimalPoints ? moneyInput[1].substring(0, props.decimalPoints) : moneyInput[1];
                input = moneyInput[0] + '.' + moneyInput[1];
            }
        }
        event.target.value = input;
    };

    var configuration = props.configuration,
        defaultValue = props.defaultValue;

    var specificProps = { maxLength: configuration.maxLength, placeholder: configuration.placeholder };
    if ((0, _lodash.get)(configuration, 'validation.shouldValidate', false)) {
        inputEvents['onInput'] = validateInput;
    }
    if (configuration.disabled) {
        specificProps['disabled'] = true;
    }

    var inputEvents = {
        onChange: props.onChange,
        onBlur: onBlur,
        onFocus: props.onFocus
    };
    return _react2.default.createElement(
        'span',
        { id: 'moneyInput' },
        configuration.prefix ? _react2.default.createElement(
            'span',
            { className: configuration.prefix.className },
            configuration.prefix.value
        ) : null,
        _react2.default.createElement('input', _extends({ defaultValue: defaultValue }, specificProps, inputEvents, { type: 'text', className: configuration.className }))
    );
};
MoneyInput.propTypes = {
    annotationId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    defaultValue: PropTypes.object,
    configuration: PropTypes.object
};