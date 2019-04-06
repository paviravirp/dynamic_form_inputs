'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Annotations = require('./Annotations');

var _Annotations2 = _interopRequireDefault(_Annotations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

replaceWithAnnotations = function replaceWithAnnotations(props) {
    var input = props.input,
        toBeReplaced = props.toBeReplaced,
        values = props.values,
        configuration = props.configuration;

    var annotationIndex = 0;
    var annotatedConditionDescription = reactStringReplace(input, new RegExp(toBeReplaced), function (match) {
        annotationIndex++;
        var uniqueKeyForAnnotation = match + annotationIndex;
        return _react2.default.createElement(_Annotations2.default, {
            value: values[match],
            invalid: row['annotations'][annotationIndex]['invalid'],
            uniqueKey: uniqueKeyForAnnotation,
            key: annotationIndex,
            annotationType: match,
            configuration: configuration[match]
        });
    });
    return annotatedConditionDescription;
};

exports.default = DynamicComponent = function DynamicComponent(props) {
    return _react2.default.createElement(
        'div',
        null,
        replaceWithAnnotations(props)
    );
};