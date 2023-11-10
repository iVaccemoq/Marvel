import React, { Component } from 'react';

import './comics.scss'

class Comics extends Component {
    render() {
        
        return (
            <li className="comics">{this.props.comics}</li>
        );
    }
}

export default Comics;