import React, { Component } from 'react';

import '../../style/container.scss';
import './header.scss'


class Header extends Component {
    render() {
        return (
            <header className='header'>
                
                <div className="header__wrapper">
                <div className="header__title"><span>Marvel</span> information portal</div>
                <div className="header__filter"><span>Characters</span> / Comics</div>
                </div>
                
            </header>
        );
    }
}

export default Header;