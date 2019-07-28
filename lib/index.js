'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Annotations = require('./Annotations');

var _Annotations2 = _interopRequireDefault(_Annotations);

var _lodash = require('lodash');

var _annotationValueComputation = require('./utils/annotationValueComputation');

var utils = _interopRequireWildcard(_annotationValueComputation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

computeAnnotationValues = function computeAnnotationValues(annotationSpecificConfiguration, data, defaultValue) {
  if ((0, _lodash.get)(annotationSpecificConfiguration, 'editable')) {
    if ((0, _lodash.isEmpty)(defaultValue)) {
      if ((0, _lodash.isEqual)((0, _lodash.get)(annotationSpecificConfiguration, 'source')), 'auto') {
        if ((0, _lodash.get)(annotationSpecificConfiguration, 'computeValue')) {
          if ((0, _lodash.has)(annotationSpecificConfiguration, 'operation')) {
            return utils.computeExpression((0, _lodash.get)(annotationSpecificConfiguration, 'operation'), (0, _lodash.get)(annotationSpecificConfiguration, 'operand'), data);
          } else {
            return utils.evaluateExpressionWithSourceData((0, _lodash.get)(annotationSpecificConfiguration, 'evaluation'), data) ? data['field'] : null;
          }
        } else if ((0, _lodash.get)(annotationSpecificConfiguration, 'populateValue')) {
          return (0, _lodash.get)(data, (0, _lodash.get)(annotationSpecificConfiguration, 'field'));
        }
      }
    }
  } else {
    return defaultValue;
  }
};

replaceWithAnnotations = function replaceWithAnnotations(props) {
  var input = props.input,
      toBeReplaced = props.toBeReplaced,
      values = props.values,
      configuration = props.configuration,
      data = props.data;

  var annotationIndex = 0;
  var annotatedString = reactStringReplace(input, new RegExp(toBeReplaced), function (match) {
    var annotationSpecificConfiguration = (0, _lodash.get)(configuration, match);
    var annotationValue = computeAnnotationValues(annotationSpecificConfiguration, data, values[match]);
    annotationIndex++;
    var uniqueKeyForAnnotation = match + annotationIndex;
    return _react2.default.createElement(_Annotations2.default, {
      value: annotationValue,
      invalid: row['annotations'][annotationIndex]['invalid'],
      uniqueKey: uniqueKeyForAnnotation,
      key: annotationIndex,
      annotationType: match,
      configuration: configuration[match]
    });
  });
  return annotatedString;
};

exports.default = DynamicComponent = function DynamicComponent(props) {
  return _react2.default.createElement(
    'div',
    null,
    replaceWithAnnotations(props)
  );
};