import ComicsWrapper from '../comicsWrapper/ComicsWrapper';
import '../loadMore/LoadMore'

import heroTeam from '../../resources/icons/heroTeam.png'
import logo from '../../resources/icons/Avengers.png'


const ComicsPage = () => {

    return (
        <div className="container"> 

            <div className="baner">
                <img className='baner__hero-team' src={heroTeam} alt="heroTean" />
                <div className="baner__text">New comics every week! Stay tuned!</div>
                <img src={logo} alt="avengers" className="baner__logo" />
            </div>

            <ComicsWrapper/>
            
        </div>
    )
}

export default ComicsPage;