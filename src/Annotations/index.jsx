import React from "react";
import * as Components from './inputFields';

export default Annotation = (props) => {
    const { configuration, value } = props;
    const componentEvents = { onBlur: props.onBlur, onChange: props.onChange, onFocus: props.onFocus };
    const SpecificComponentToBeRendered = Components[configuration.annotationType];
    return(
        <div className="annotation-container">
            <SpecificComponentToBeRendered eventsToBeCaptured = {componentEvents} configuration = {configuration} defaultValue = {value} />
        </div>
    );
}
