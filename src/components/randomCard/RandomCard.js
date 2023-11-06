import React, { Component } from 'react';

import '../../style/button.scss'

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './randomCard.scss'
class RandomCard extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }

    marvel = new MarvelService();

    componentDidMount = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvel.getCharacter(id)
            .then(res => {
                this.setState({char:res, loading:false})
            })
            .catch(res => {
                this.setState({error:true, loading:false})
            })
    }

    render() {
        const {char, loading, error} = this.state;

        const load = loading ? <Spinner/> : null;
        const err = error ? <Error/> : null;
        const view =  !(loading || error) ? <View char={char} /> : null;

        return (
            <div>
                {load}
                {err}
                {view}
            </div>
            
        );
    }
}

const View = (props) => {
    const {img,name,descr,homepage,wiki} = props.char;

    return (
        <div className='card'> 
            <div className="">
                <img className='card__img' src={img} alt="Thor" />
            </div>
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
    )
}



export default RandomCard;