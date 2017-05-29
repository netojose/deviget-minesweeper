import React from 'react';
import './Game.scss';
import Api from '../../Libraries/Api'

export default class Game extends React.Component {
        
    componentDidMount() {
        console.log(this.props.user)
    }
            
    render() {
        return (
            <div className="Game">
                <p>Wellcome {this.props.user.username}</p>
            </div>
        );
    }
}