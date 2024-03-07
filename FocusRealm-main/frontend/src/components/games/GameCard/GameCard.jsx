import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ name, link, image }) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(link);
    };

    return (
        React.createElement('div', { className: 'container', onClick: clickHandler },
            React.createElement('h1', null, name),
            React.createElement('div', null,
                React.createElement('img', {
                    src: image,
                    style: {
                        width: name === 'BlackJack' ? '350px' : name === 'Sudoku' ? '220px' : '80%',
                        height: 'auto',
                    },
                    alt: name
                })
            )
        )
    );
};

export default GameCard;
