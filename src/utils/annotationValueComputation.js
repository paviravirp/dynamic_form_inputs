import { Parser } from 'expr-eval';

export const computeEncompassValue = (expression, variable, value) => {
    const substitute = {};
    substitute[variable] = value;
    try {
      return '' + Parser.evaluate(expression, substitute);
    } catch(err) {
      return expression;
    }
};

export const evaluateExpressionWithSourceData = (evaluation, data) => {
    try {
        return Parser.evaluate(evaluation, data);
    } catch(err) {
        return false;
    }
};