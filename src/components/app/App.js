
import './App.scss';

import { Component } from 'react';

import Header from '../header/Header';
import RandomCard from '../randomCard/RandomCard';
import Random from '../random/ChooseRandomCard';
import Heroes from '../heroes/heroes';
import HeroInformation from '../heroInformation/HeroInformation';
import MarvelService from '../../services/MarvelService';

import '../../style/container.scss'

import decoration from '../../resources/img/vision.png'

class App extends Component {

  state = {
    characterId: null
  }

  characterId = (id) => {
    this.setState({
      characterId: id
    })
  }

  MarvelService = new MarvelService()

  render() {
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
              <Heroes characterId={this.characterId}/>
              <HeroInformation characterId={this.state.characterId} />
            </div>
            
          </div>
          <img className="main__decoration" src={decoration} alt="vision"/>
        </section>
      </div>
    );
  }
}

export default App;
