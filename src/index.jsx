import React from 'react';
import Annotation from './Annotations';
import { get, isEqual, has, isEmpty } from 'lodash';
import * as utils from './utils/annotationValueComputation';

computeAnnotationValues = (annotationSpecificConfiguration, data, defaultValue) => {
  if(get(annotationSpecificConfiguration, 'editable')) {
    if(isEmpty(defaultValue)) {
      if(isEqual(get(annotationSpecificConfiguration, 'source')), 'auto') {
        if(get(annotationSpecificConfiguration, 'computeValue')) {
          if(has(annotationSpecificConfiguration, 'operation')) {
            return utils.computeExpression(get(annotationSpecificConfiguration, 'operation'), get(annotationSpecificConfiguration, 'operand'), data);
          }
          else {
            return utils.evaluateExpressionWithSourceData(get(annotationSpecificConfiguration, 'evaluation'), data) ? data['field'] : null;
          }
        }
        else if(get(annotationSpecificConfiguration, 'populateValue')) {
          return get(data, get(annotationSpecificConfiguration, 'field'));
        }
      }
    }
  }
  else {
    return defaultValue;
  }
};

replaceWithAnnotations = (props) => {
    const { input, toBeReplaced, values, configuration, data } = props;
    let annotationIndex = 0;
    let annotatedString = reactStringReplace(input, new RegExp(toBeReplaced), (match) => {
      const annotationSpecificConfiguration = get(configuration, match);
      const annotationValue = computeAnnotationValues(annotationSpecificConfiguration, data, values[match]);
      annotationIndex++;
      const uniqueKeyForAnnotation = match+annotationIndex;
      return (
        <Annotation
          value={annotationValue}
          invalid={row['annotations'][annotationIndex]['invalid']}
          uniqueKey={uniqueKeyForAnnotation}
          key={annotationIndex}
          annotationType={match}
          configuration={configuration[match]}
        />
      );
    });
    return annotatedString;
}

export default DynamicComponent = (props) => {
    return(
        <div>
        {replaceWithAnnotations(props)}
        </div>
    );
}
