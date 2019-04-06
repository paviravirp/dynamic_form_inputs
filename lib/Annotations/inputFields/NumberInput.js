'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = NumberInput = function NumberInput(props) {
    var configuration = props.configuration,
        defaultValue = props.defaultValue;


    var inputEvents = {
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus
    };

    var specificProps = { placeholder: configuration.placeholder };

    if (get(configuration, 'validation.shouldValidate')) {
        specificProps['min'] = get(configuration, 'validation.minimumValue');
        specificProps['max'] = get(configuration, 'validation.maximumValue');
    }

    return _react2.default.createElement('input', _extends({ type: 'number' }, specificProps, inputEvents, { className: configuration.className, defaultValue: defaultValue }));
};