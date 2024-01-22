import '../../style/container.scss';
import './header.scss'

import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className='header'>
            
            <div className="header__wrapper">
            <div className="header__title">
                <Link to="">
                    <span>Marvel</span> information portal
                </Link>
            </div>
            <div className="header__filter">
                <NavLink 
                end 
                className='header__char' 
                style={({isActive}) => ({color: isActive ? '#9F0013' : 'black'})}
                to="/">Characters</NavLink>
                 / 
                <NavLink  
                style={({isActive}) => ({color: isActive ? '#9F0013' : 'black'})}
                className='header__comics' 
                to="/comics">Comics</NavLink>
            </div>
            </div>
            
        </header>
    );
}

export default Header;