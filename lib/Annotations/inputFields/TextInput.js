'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = TextInput = function TextInput(props) {
    var configuration = props.configuration,
        defaultValue = props.defaultValue;

    var specificProps = { maxLength: configuration.maxLength, placeholder: configuration.placeholder };
    if (configuration.disabled) {
        specificProps['disabled'] = true;
    }

    var validateInput = function validateInput(event) {
        var input = (0, _lodash.clone)(event.target.value);
        input = input.replace(get(configuration, 'validation.validationRegex'), '');
        event.target.value = input;
    };

    var inputEvents = {
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus
    };

    if (get(configuration, 'validation.shouldValidate', false)) {
        inputEvents['onInput'] = validateInput;
    }

    return _react2.default.createElement('input', _extends({ type: 'text' }, specificProps, { value: defaultValue, className: configuration.className }, inputEvents));
};