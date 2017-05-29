import React from 'react';
import './App.scss';

import Login from '../../components/Login/Login';
import Game from '../../components/Game/Game';

export default class App extends React.Component {
        
    constructor(props) {
        super(props);
        this.handleSetUser = this.handleSetUser.bind(this);
        this.state = {
            user: null
        };
    }
    
    handleSetUser(user) {
        this.setState({user});
    }
        
    render() {
        return (
            <div className="App">
                <div className="content">
                    {(() => {
                        if(!this.state.user){
                            return <Login setUser={this.handleSetUser} />
                        } else {
                            return <Game user={this.state.user} />
                        }
                    })()}
                </div>
            </div>
        );
    }
}