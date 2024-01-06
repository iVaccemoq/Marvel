
import './App.scss';

import { useState } from 'react';

import Header from '../header/Header';
import RandomCard from '../randomCard/RandomCard';
import Random from '../random/ChooseRandomCard';
import Heroes from '../heroes/heroes';
import HeroInformation from '../heroInformation/HeroInformation';
import MarvelService from '../../services/MarvelService';
import ComicsWrapper from '../comicsWrapper/ComicsWrapper';
import LoadMore from '../loadMore/LoadMore';

import '../../style/container.scss'

import decoration from '../../resources/img/vision.png'

const App = () => {

  const [characterId, setCharacterId] = useState(null);

  const OncharacterId = (id) => {
    setCharacterId(id);
  }



  return (
    <div className='App'>
      <main className='main'>
        {/* <div className="container">
          <Header/>
          <div className="main__wrapper">
            <RandomCard/>
          </div>
          <div className="main__heroWrapper">
            <Heroes characterId={OncharacterId}/>
            <HeroInformation characterId={characterId} />
          </div>
          
        </div>
        <img className="main__decoration" src={decoration} alt="vision"/> */}
        <div className="container">
          <Header/>
          <ComicsWrapper/>
          {/* <LoadMore/> */}
        </div>
      </main>
    </div>
  );
  
}

export default App;
