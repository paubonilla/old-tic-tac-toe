import React, { Component } from 'react'
import { GameInner, Button, PlayerInfo, PlayerStatus, MoveList } from '../styled'
import Board from './Board'

import michael from '../images/michael.png'
import styled from 'styled-components'

export const ImageStyle = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  right: 0;
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
            const desc = move? "Player's " + move + " move" : 'Start New Game';
            return (
                <MoveList 
                    key={move}>
                    <Button onClick={() => {this.jumpTo(move)}}>
                        {desc}
                    </Button>
                </MoveList>
            )
        })
        let status;
        if(winner) {
            status = winner + "'s win!";
        } else {
            status = (this.state.xIsNext? 'Dwight' : 'Michael') + " it's turn";
        }


        return (
            <div>
                <GameInner>
                    <div className="game-board">
                        {/* <div className="title">The Office: tic tac toe</div> */}
                        <PlayerStatus>{status}</PlayerStatus>
                        <Board 
                            onClick={(i) => this.handleClick(i)}
                            squares={current.squares}
                        />
                    </div>
                    <PlayerInfo>
                        <ul>{moves}</ul>
                    </PlayerInfo>

                </GameInner>
                <ImageStyle>
                    <Image src={michael} alt="si tito scott"/>
                </ImageStyle>
            </div>
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