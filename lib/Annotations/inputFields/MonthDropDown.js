'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = MonthDropDown = function MonthDropDown(props) {
    var configuration = props.configuration,
        defaultValue = props.defaultValue;

    var constructOptions = function constructOptions() {
        return _.times(12, function (value) {
            return { 'label': ++value, 'value': value };
        });
    };

    onChange = function onChange(event) {
        return props.onChange(event.value);
    };

    var specificProps = { placeholder: configuration.placeholder };

    var inputEvents = {
        onChange: onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus
    };

    return _react2.default.createElement(_reactSelect2.default, _extends({}, specificProps, inputEvents, {
        defaultValue: { 'label': defaultValue, 'value': defaultValue },
        className: configuration.className,
        options: constructOptions
    }));
};