import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">Clicky Game</li>
            <li>Click an image to begin!</li>
            <li>Score: {props.score} | Wins: {props.highScore}
            </li>
        </ul>
    </nav>
);


export default Nav;