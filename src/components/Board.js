import React, { Component } from 'react'
import Square from './Square'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const BorderRow = styled.div`
  display: flex;
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`

export default class Board extends Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    }
    render() {
        return (
            <Wrapper>
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
            </Wrapper>
        )
    }
}