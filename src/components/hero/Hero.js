import React, { Component } from 'react';

class Hero extends Component {
    render() {

        const {name, img, id} = this.props;
        return (
            <li className="heroes__hero">
                <img src={img} alt="hero" />
                <div className="heroes__name">{name}</div>
            </li>
        );
    }
}

export default Hero;