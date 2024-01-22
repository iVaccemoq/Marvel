import heroTeam from '../../resources/icons/heroTeam.png'
import logo from '../../resources/icons/Avengers.png'

import './banner.scss'
import './singleHero.scss'

const SingleHero = ({heroesInfo}) => {

    return(
        <>
        <div className="baner">
            <img className='baner__hero-team' src={heroTeam} alt="heroTean" />
            <div className="baner__text">New comics every week! Stay tuned!</div>
            <img src={logo} alt="avengers" className="baner__logo" />
        </div>

        <div className="singleHero">
            <img className='singleHero__img' src={heroesInfo.img} alt="hero" />
            <div className="singleHero__info">
                <div className="singleHero__title">{heroesInfo.name}</div>
                <p className="singleHero__descr">{heroesInfo.descr}</p>
            </div>
        </div>
        </>
    )
}

export default SingleHero;