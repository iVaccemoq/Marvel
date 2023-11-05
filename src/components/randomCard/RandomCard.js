import React, { Component } from 'react';

import '../../style/button.scss'

import MarvelService from '../../services/MarvelService';

import './randomCard.scss'
class RandomCard extends Component {

    state = {
        name: null,
        descr: null,
        img: null,
        homepage: null,
        wiki: null
    }

    marvel = new MarvelService();

    componentDidMount = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvel.getCharacter(id)
            .then(res => {
                this.setState((state) => {
                    return {
                        name: res.data.results[0].name,
                        descr: res.data.results[0].description,
                        img: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
                        homepage: res.data.results[0].urls[0].url,
                        wiki: res.data.results[0].urls[1].url
                    }
                })
            })
    }

    render() {
        const {name, descr, img, homepage, wiki} = this.state;
        return (
            <div className='card'> 
                <img className='card__img' src={img} alt="Thor" />
                <div className="card__wrapper">
                    <div className="card__title">{name}</div>
                    <p className="card__descr">{descr}</p>
                    <div className="card__button-wrapper">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default RandomCard;