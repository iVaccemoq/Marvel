import React, { Component } from 'react';

import Thor from '../../resources/img/Thor.jpg';

class Hero extends Component {
    render() {
        return (
            <li className="heroes__hero">
                <img src={Thor} alt="hero" />
                <div className="heroes__name">ABYSS</div>
            </li>
        );
    }
}

export default Hero;