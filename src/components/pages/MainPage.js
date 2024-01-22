import decoration from '../../resources/img/vision.png'
import '../random/ChooseRandomCard'
import { useState } from 'react';

import RandomCard from '../randomCard/RandomCard';
import Heroes from '../heroes/heroes';
import HeroInformation from '../heroInformation/HeroInformation';

const MainPage = () => {

    const [characterId, setCharacterId] = useState(null);

    const OncharacterId = (id) => {
        setCharacterId(id);
    }

    return (
        <>
          <div className="container">
            <div className="main__wrapper">
              <RandomCard/>
            </div>
            <div className="main__heroWrapper">
              <Heroes characterId={OncharacterId}/>
              <HeroInformation characterId={characterId} />
            </div>
            
          </div>
          <img className="main__decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;