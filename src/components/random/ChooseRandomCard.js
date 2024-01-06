import './chooseRandomCard.scss'

import molot from '../../resources/icons/Decoration.png'

import RandomCard from '../randomCard/RandomCard';

const Random = () => {
    
    const Card = new RandomCard();
    return (
        <div className='choose'>
            <div className="choose__ques">Random character for today!
            Do you want to get to know him better?</div>
            <div className="choose__another">Or choose another one</div>
            <div className="choose__wrapper">
                <a href="/" className="button button__main" onClick={Card.onTryIt()}>
                    <div className="inner">Try it</div>
                </a>
            </div>
            <img src={molot} alt="alt" />
        </div>
    );
}

export default Random;