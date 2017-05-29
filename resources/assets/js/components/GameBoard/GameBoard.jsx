import React from 'react';
import './GameBoard.scss';
import Cell from '../Cell/Cell';

export default class GameBoard extends React.Component {
        
    renderRow(row, rowKey) {
        let items = [];
        Object.keys(row).map(colKey => {
            items.push(<li key={`${rowKey}-${colKey}`}><Cell data={row[colKey]} row={rowKey} col={colKey} /></li>);
        });
        return <ul>{items}</ul>
    }
        
    render() {
        return (
            <div className="GameBoard">
            {(() => {
                if(this.props.game){
                    let els = JSON.parse(this.props.game.elements);
                    let rows = [];
                    Object.keys(els).map(rowKey => {
                        rows.push( this.renderRow( els[rowKey], rowKey ) );
                    });
                    return rows;
                } else {
                    return <p>Choose or create a game</p>
                }
            })()}
            </div>
        );
    }
}