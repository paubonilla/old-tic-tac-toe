import React from 'react'
import styled from 'styled-components'

export const SquareButton = styled.button`
  background: #e8e8e8;
  border: 2px solid #333436;
  border-radius: 10px;
  float: left;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  line-height: 80px;

  &:focus {
    outline: none;
  }
`

export default function Square(props) {
    return (
        <SquareButton
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </SquareButton>
    )
}