import React from 'react';
import './Errors.scss';

export default class Errors extends React.Component {

    render() {
        let errors = (this.props.errors && this.props.errors.response.status == 422) ? this.props.errors.response.data : null;
        return errors ? (
            <ul>
                {Object.keys(errors).map(item => {
                    return <li>{errors[item][0]}</li>;
                })}
            </ul>
        ) : null;
    }
}