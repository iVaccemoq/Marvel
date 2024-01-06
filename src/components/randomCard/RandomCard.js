import React, { useState, useEffect } from 'react';

import '../../style/button.scss'

import molot from '../../resources/icons/Decoration.png'

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './randomCard.scss'
const RandomCard = () => {

    const [char, setChar] = useState({})

    const {loading, error, getCharacter, clearError} = useMarvelService();

    const ContactingTheServer = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(res => {
                setChar(res);               
            })
            .catch(res => {                
            })
    }

    useEffect(() => {
        ContactingTheServer();
    }, [])

    const onTryIt = (e) => {
        e.preventDefault();
        
        ContactingTheServer();
        clearError();

    }

    const load = loading ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const view =  !(loading || error) ? <View char={char} /> : null;

    return (
        <div className='wrapper'>
            {load}
            {err}
            {view}
            <div className='choose'>
            <div className="choose__ques">Random character for today!
                Do you want to get to know him better?</div>
                <div className="choose__another">Or choose another one</div>
                <div className="choose__wrapper">
                    <a href="/" className="button button__main" onClick={(e) => onTryIt(e)}>
                        <div className="inner">Try it</div>
                    </a>
                </div>
                <img src={molot} alt="alt" />
            </div>
        </div>
        
        
    );
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