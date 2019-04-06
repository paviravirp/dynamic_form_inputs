import React, { PropTypes, Component } from 'react';

export default class TextInput extends Component {
    render() {
        const { configuration } = this.props;
        const specificProps = { maxLength: configuration.maxLength, placeholder: configuration.placeholder, form: configuration.form };
        if(configuration.disabled) {
            specificProps['disabled'] = true;
        }
        return(
            <input type='text' {...specificProps} value={defaultValue} className={configuration.className} onChange={this.props.onChange} onFocus={this.props.onFocus} onBlur={this.props.onBlur}></input>
        );
    }
};

TextInput.propTypes = {
    configuration: PropTypes.object,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};