import React from 'react';
import './Game.scss';
import Api from '../../Libraries/Api'
import NewGameModalForm from '../NewGameModalForm/NewGameModalForm';
import GameBoard from '../GameBoard/GameBoard';

export default class Game extends React.Component {
        
    constructor(props){
        super(props);
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleNewGameCreated = this.handleNewGameCreated.bind(this);
        this.state = {
            loadingGames: false,
            displayNewGameModal: false,
            games: [],
            currentGameId: null
        }
    }
        
    componentDidMount() {
        this.setState({loadingGames: true});
        Api.get(`games/${this.props.user.username}`).then(response => {
            this.setState({games: response.data, loadingGames: false});
        });
    }
    
    handleNewGame() {
        this.setState({displayNewGameModal: true});
    }
    
    handleCloseModal() {
        this.setState({displayNewGameModal: false});
    }
    
    handleNewGameCreated(game) {
        this.handleCloseModal();
        let games = this.state.games;
        games.push(game);
        this.setState({games});
        this.loadGame(game);
    }
    
    loadGame(game) {
        this.setState({currentGameId: game.id});
    }
    
    getCurrentGame() {
        return this.state.games.find(i => i.id == this.state.currentGameId);
    }
            
    render() {
        return (
            <div className="Game">
                <p>Wellcome {this.props.user.username}</p>
                
                {this.state.loadingGames && <p>Loading games...</p>}
                
                {(() => {
                    if(this.state.games.length > 0){
                        return (
                            <ul>
                                {this.state.games.map(game => {
                                    return <li><input key={game.id} onClick={this.loadGame.bind(this, game)} type="button" value={`${game.created_at} \ ${game.finished}`} /></li>;
                                })}
                            </ul>
                        )
                    }
                })()}
                
                <input type="button" value="Create new game" onClick={this.handleNewGame} />
                {this.state.displayNewGameModal && <NewGameModalForm userId={this.props.user.id} closeModal={this.handleCloseModal} handleNewGameCreated={this.handleNewGameCreated} />}
                        
                <GameBoard game={this.getCurrentGame()} />
            </div>
        );
    }
}