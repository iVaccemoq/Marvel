import React, { Component } from 'react';

class Hero extends Component {
    render() {

        const {name, img, characterId, id} = this.props;
        
        return (
            <li 
            key={id}
            className="heroes__hero"
            onClick={() => characterId(id)}>
                <img src={img} alt="hero" />
                <div className="heroes__name">{name}</div>
            </li>
        );
    }
}

export default Hero;