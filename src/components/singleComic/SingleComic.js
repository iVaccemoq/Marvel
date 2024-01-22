import { Link } from "react-router-dom"

import heroTeam from '../../resources/icons/heroTeam.png'
import logo from '../../resources/icons/Avengers.png'

const SingleComic = ({comicsInfo}) => {
    return (
        <>
        <div className="baner">
            <img className='baner__hero-team' src={heroTeam} alt="heroTean" />
            <div className="baner__text">New comics every week! Stay tuned!</div>
            <img src={logo} alt="avengers" className="baner__logo" />
        </div>
        
        <div className="single-comic">
            <img src={comicsInfo.data.results[0].thumbnail.path + '.' + comicsInfo.data.results[0].thumbnail.extension} alt="comicsImg" className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{comicsInfo.data.results[0].title}</h2>
                <p className="single-comic__descr">{comicsInfo.data.results[0].description === '' ? 'Нет информации о комиксе' : comicsInfo.data.results[0].description }</p>
                <p className="single-comic__descr">{comicsInfo.data.results[0].pageCount} pages</p>
                <p className="single-comic__descr">Language: en-us</p>
                <div className="single-comic__price">{comicsInfo.data.results[0].prices[0].price}$</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
        </>

        
    )
}

export default SingleComic;