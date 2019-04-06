'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = DateTimeInput = function DateTimeInput(props) {
  var configuration = props.configuration,
      defaultValue = props.defaultValue;

  var specificProps = { placeholderText: configuration.placeholder, dateFormat: configuration.dateTimeFormat };
  if (configuration.disabled) {
    specificProps['disabled'] = true;
    specificProps['openToDate'] = configuration.openToDate ? configuration.openToDate : new Date();
  }

  var inputEvents = {
    onChange: props.onChange,
    onBlur: props.onBlur,
    onFocus: props.onFocus
  };

  return _react2.default.createElement(_reactDatepicker2.default, _extends({
    className: configuration.className
  }, specificProps, inputEvents, {
    selected: defaultValue,
    isClearable: true
  }));
};