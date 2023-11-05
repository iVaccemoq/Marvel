import React, { Component } from 'react';

import Thor from '../../resources/img/Thor.jpg';

import './heroInformation.scss'

import Comics from '../comics/Comics';
import MarvelService from '../../services/MarvelService';


class HeroInformation extends Component {
    render() {
        return (
            <div className='heroName'>
                <div className="heroName__avatar">
                    <img src={Thor} alt="hero" />
                    <div className="heroName__name">
                        Loki
                        <div className="heroName__buttons-wrapper">
                            <a href="#" className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href="#" className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="heroName__descr">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                </p>
                <div className="heroName__comics">Comics:</div>
                <ol className="heroName__comicses">
                    <Comics/>
                    <Comics/>
                    <Comics/>
                    <Comics/>
                    <Comics/>
                    <Comics/>
                    <Comics/>
                    <Comics/>
                    <Comics/>
                    <Comics/>
                    
                </ol>
            </div>
        );
    }
}

export default HeroInformation;