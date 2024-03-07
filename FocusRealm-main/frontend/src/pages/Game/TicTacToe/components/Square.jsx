import React from 'react';

export default function Square(props)
{
    var style = {};
    if (props.value)
    {
        style.color = props.value === 'X' ? '#fc7341' : '#2db2e2';
    }
    if (props.winner)
    {
        if (props.winner === 'X')
        {
            style.background = '#ffccb5';
        }
        else
        {
            style.background = '#c3f7f9';
        }
    }
    if (props.clickable)
    {
        style.background = 'var(--square-color)';
    }
    return (
        <button className="square" style={style} onClick={props.onClick}>
            {props.value}
        </button>
    );
}