import React from 'react';
import './Cell.scss';

export default class Cell extends React.Component {
        
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        let {row, col} = this.props;
        let {mine, status} = this.props.data;
        console.log({row, col,mine, status});
    }

    render() {
        // this.props.data, this.props.row, this.props.col
        return <div className="Cell" onClick={this.handleClick}></div>
    }
}