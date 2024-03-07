import React from 'react';

export default function generateGridNxN(className, size, generatorFunction)
{
    var rows = [];
    for (let i = 0; i < size; i++)
    {
        let cols = [];
        for (let j = 0; j < size; j++)
        {
            cols.push(generatorFunction(i*size + j));
        }
        rows.push(
            <div className={className+'-row'} key={i}>{cols}</div>
        );
    }
    return (
        <div className={className}>{rows}</div>
    );
}

