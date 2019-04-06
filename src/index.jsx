import React, { PropTypes, Component } from "react";
import * as Components from './inputFields';

export default class Annotations extends Component {

    render() {
        const { configuration, value } = this.props;
        const componentEvents = { onBlur: this.props.onBlur, onChange: this.props.onChange, onFocus: this.props.onFocus };
        const SpecificComponentToBeRendered = Components[configuration.annotationType];
        return(
            <div className="annotation-container">
                <SpecificComponentToBeRendered eventsToBeCaptured = {componentEvents} configuration = {configuration} defaultValue = {value} />
            </div>
        );
    }
}

Annotations.propTypes = {
        data: PropTypes.object,
        uniqueKey: PropTypes.string,
        configuration: PropTypes.object,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
};