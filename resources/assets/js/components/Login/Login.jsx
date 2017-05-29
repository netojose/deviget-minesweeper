import React from 'react';
import './Login.scss';
import Errors from '../Errors/Errors';
import Api from '../../Libraries/Api'

export default class Login extends React.Component {
        
    constructor(props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onKeyPressInput = this.onKeyPressInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            inputValue: '',
            loading: false,
            errors: null
        }
    }
    
    componentDidMount() {
        this.textInput.focus();
    }
    
    onChangeInput(evt) {
        this.setState({inputValue: evt.target.value, errors: null});
    }
    
    onKeyPressInput(evt) {
        if(evt.nativeEvent.keyCode === 13){
            evt.nativeEvent.preventDefault();
            this.handleLogin();
        }
    }
    
    handleLogin() {
        this.setState({loading: true});
        Api.post('users', {username: this.state.inputValue})
        .then(response => {
            this.setState({loading: false});
            this.props.setUser(response.data);
        })
        .catch(error => {
            this.setState({loading: false}, () => {
                this.textInput.focus();
            });
            this.setState({errors: error});
        });
    }
            
    render() {
        return (
            <form className="Login">
                <h3>Login/Register</h3>
                <input type="text" ref={input => { this.textInput = input; }} onKeyPress={this.onKeyPressInput} onChange={this.onChangeInput} value={this.state.inputValue} disabled={this.state.loading} />
                <Errors errors={this.state.errors} />
                <input type="button" value="Login" onClick={this.handleLogin} disabled={this.state.loading} />
                {this.state.loading && <p className="loading-msg">Loading...</p>}
            </form>
        );
    }
}