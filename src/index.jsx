import React, { PropTypes, Component } from 'react';
import Annotation from './Annotations';


replaceWithAnnotations = (props) => {
    const { input, toBeReplaced, values, configuration } = props;
    let annotationIndex = 0;
    let annotatedConditionDescription = reactStringReplace(input, new RegExp(toBeReplaced), (match) => {
        annotationIndex++;
        const uniqueKeyForAnnotation = match+annotationIndex;
        return (
          <Annotation
            value={values[match]}
            invalid={row['annotations'][annotationIndex]['invalid']}
            uniqueKey={uniqueKeyForAnnotation}
            key={annotationIndex}
            annotationType={match}
            configuration={configuration[match]}
          />
        );
    });
    return annotatedConditionDescription;
}

export default DynamicComponent = (props) => {
    return(
        <div>
        {replaceWithAnnotations(props)}
        </div>
    );
}
