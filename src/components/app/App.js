
import './App.scss';

import Header from '../header/Header';
import RandomCard from '../randomCard/RandomCard';
import Random from '../random/ChooseRandomCard';
import Heroes from '../heroes/heroes';
import HeroInformation from '../heroInformation/HeroInformation';

import '../../style/container.scss'

import decoration from '../../resources/img/vision.png'

function App() {
  return (
    <div className='App'>
      <section className='main'>
        <div className="container">
          <Header/>
          <div className="main__wrapper">
            <RandomCard/>
            {/* <Random/> */}
          </div>
          <div className="main__heroWrapper">
            <Heroes/>
            <HeroInformation/>
          </div>
          <div className="main__button">
            <a href="#" className="button button__main">
                <div className="inner">homepage</div>
            </a>
          </div>
        </div>
        <img className="main__decoration" src={decoration} alt="vision"/>
      </section>
    </div>
  );
}

export default App;
