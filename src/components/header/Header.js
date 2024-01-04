import '../../style/container.scss';
import './header.scss'


const Header = () => {
    return (
        <header className='header'>
            
            <div className="header__wrapper">
            <div className="header__title"><span>Marvel</span> information portal</div>
            <div className="header__filter"><span>Characters</span> / Comics</div>
            </div>
            
        </header>
    );
}

export default Header;