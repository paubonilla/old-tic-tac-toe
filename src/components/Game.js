import React, { Component } from 'react'
import Board from './Board'
import styled from 'styled-components'

export const GameWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`

export const Button = styled.button`
  /* display: inline; */
  margin: 20px 0;
  height: 25px;
  width: 120px;
  border: none;
  outline: none;
  background: #e8e8e8;
`

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step%2) === 0 
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if(winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })

    }
    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move? 'Player move ' + move : 'Start New Game';
            return (
                <li 
                    className="move-list"
                    key={move}>
                    <Button onClick={() => {this.jumpTo(move)}}>
                        {desc}
                    </Button>
                </li>
            )
        })
        let status;
        if(winner) {
            status = 'Player ' + winner + ' is the winner!';
        } else {
            status = 'It is ' + (this.state.xIsNext? 'X' : 'O') + "'s turn";
        }


        return (
            <GameWrapper>
                <div className="game-board">
                    <div className="title">tic tac toe</div>
                    <Board 
                        onClick={(i) => this.handleClick(i)}
                        squares={current.squares}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
            </GameWrapper>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    
    return null;
}