import React from 'react'
import { SquareButton } from '../styled'

export default function Square(props) {
    return (
        <SquareButton
            onClick={props.onClick}
        >
            {props.value}
        </SquareButton>
    )
}