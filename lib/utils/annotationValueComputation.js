'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.evaluateExpressionWithSourceData = exports.computeEncompassValue = undefined;

var _exprEval = require('expr-eval');

var computeEncompassValue = exports.computeEncompassValue = function computeEncompassValue(expression, variable, value) {
    var substitute = {};
    substitute[variable] = value;
    try {
        return '' + _exprEval.Parser.evaluate(expression, substitute);
    } catch (err) {
        return expression;
    }
};

var evaluateExpressionWithSourceData = exports.evaluateExpressionWithSourceData = function evaluateExpressionWithSourceData(evaluation, data) {
    try {
        return _exprEval.Parser.evaluate(evaluation, data);
    } catch (err) {
        return false;
    }
};