"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _inputFields = require("./inputFields");

var Components = _interopRequireWildcard(_inputFields);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Annotation = function Annotation(props) {
    var configuration = props.configuration,
        value = props.value;

    var componentEvents = { onBlur: props.onBlur, onChange: props.onChange, onFocus: props.onFocus };
    var SpecificComponentToBeRendered = Components[configuration.annotationType];
    return _react2.default.createElement(
        "div",
        { className: "annotation-container" },
        _react2.default.createElement(SpecificComponentToBeRendered, { eventsToBeCaptured: componentEvents, configuration: configuration, defaultValue: value })
    );
};