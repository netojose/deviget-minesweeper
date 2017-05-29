import React from 'react';
import ReactDOM from 'react-dom';
import './NewGameModalForm.scss';
import Errors from '../Errors/Errors';
import Api from '../../Libraries/Api'

export default class NewGameModalForm extends React.Component {
        
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleCreateGame = this.handleCreateGame.bind(this);
        this.setValue = this.setValue.bind(this);
        this.state = {
            rows: '',
            columns: '',
            mines: '',
            errors: null
        }
    }
        
    componentDidMount() {
        this.popup = document.createElement("div");
        document.body.appendChild(this.popup);
        this._renderLayer();
        this.textInputRows.focus();
    }
    
    componentDidUpdate() {
        this._renderLayer();
    }
    
    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    }
    
    _renderLayer() {
        ReactDOM.render(
            <div className="NewGameModalForm">
                <div className="overlay"></div>
                <div className="modal">
                    <h3>Create new game</h3>
                    <label>Rows <input type="text" value={this.state.rows} onChange={this.setValue.bind(this, 'rows')} ref={input => { this.textInputRows = input; }} /></label>
                    <label>Columns <input type="text" value={this.state.columns} onChange={this.setValue.bind(this, 'columns')} /></label>
                    <label>Mines <input type="text" value={this.state.mines} onChange={this.setValue.bind(this, 'mines')} /></label>
                    <div className="centered">
                        <input type="button" value="Create game" onClick={this.handleCreateGame} />
                        <input type="button" value="Cancel" onClick={this.handleClose} />
                        <Errors errors={this.state.errors} />
                    </div>
                </div>
            </div>, this.popup);
    }
    
    handleClose() {
        this.props.closeModal();
    }
    
    handleCreateGame() {
        let {rows, columns, mines} = this.state;
        let user_id = this.props.userId;
        Api.post('games', {
            user_id: parseInt(user_id, 10), 
            rows: parseInt(rows, 10), 
            columns: parseInt(columns, 10), 
            mines: parseInt(mines, 10)
        }).then(response => {
            this.props.handleNewGameCreated(response.data);
        })
        .catch(error => {
            this.setState({errors: error});
        });
    }
    
    setValue(field, evt) {
        this.setState({[field]: evt.target.value, errors: null});
    }
        
    render() {
        return null;
    }
}