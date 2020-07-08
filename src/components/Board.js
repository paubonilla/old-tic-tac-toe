import React, { Component } from 'react'
import { BoardWrapper, BorderRow } from '../styled'
import Square from './Square'

export default class Board extends Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    }
    render() {
        return (
            <BoardWrapper>
                <BorderRow>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </BorderRow>
                <BorderRow>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </BorderRow>
                <BorderRow>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </BorderRow>
            </BoardWrapper>
        )
    }
}