import React from 'react';
import './Login.scss';
import Api from '../../Libraries/Api'

export default class Login extends React.Component {
        
    constructor(props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onKeyPressInput = this.onKeyPressInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            inputValue: '',
            errorMsg: '',
            loading: false
        }
    }
    
    componentDidMount() {
        this.textInput.focus();
    }
    
    onChangeInput(evt) {
        this.setState({inputValue: evt.target.value, errorMsg: ''});
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
            if(error.response.status == 422){
                this.setState({errorMsg: error.response.data.username[0]});
            }
        });
    }
            
    render() {
        return (
            <form className="Login">
                <input type="text" ref={input => { this.textInput = input; }} onKeyPress={this.onKeyPressInput} onChange={this.onChangeInput} value={this.state.inputValue} disabled={this.state.loading} />
                {this.state.loading && <p>Loading...</p>}
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                <input type="button" value="Login" onClick={this.handleLogin} disabled={this.state.loading} />
            </form>
        );
    }
}