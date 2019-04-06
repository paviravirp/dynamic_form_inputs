"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _inputFields = require("./inputFields");

var Components = _interopRequireWildcard(_inputFields);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Annotations = function (_Component) {
    _inherits(Annotations, _Component);

    function Annotations() {
        _classCallCheck(this, Annotations);

        return _possibleConstructorReturn(this, (Annotations.__proto__ || Object.getPrototypeOf(Annotations)).apply(this, arguments));
    }

    _createClass(Annotations, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                configuration = _props.configuration,
                value = _props.value;

            var componentEvents = { onBlur: this.props.onBlur, onChange: this.props.onChange, onFocus: this.props.onFocus };
            var SpecificComponentToBeRendered = Components[configuration.annotationType];
            return _react2.default.createElement(
                "div",
                { className: "annotation-container" },
                _react2.default.createElement(SpecificComponentToBeRendered, { eventsToBeCaptured: componentEvents, configuration: configuration, defaultValue: value })
            );
        }
    }]);

    return Annotations;
}(_react.Component);

exports.default = Annotations;


Annotations.propTypes = {
    data: _react.PropTypes.object,
    uniqueKey: _react.PropTypes.string,
    configuration: _react.PropTypes.object,
    value: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    onBlur: _react.PropTypes.func,
    onFocus: _react.PropTypes.func
};