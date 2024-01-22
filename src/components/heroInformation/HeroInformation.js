import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './heroInformation.scss'

import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import Comics from '../comics/Comics';
import useMarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';
import CustomForm from '../form/Form';


const HeroInformation = (props) => {

    const [char, setChar] = useState(false);
    
    const {error, loading, getCharacter} = useMarvelService();

    const onUpdate = () => {
        if (!props.characterId) {
            return
        }
        
       getCharacter(props.characterId)
            .then(res => {
                setChar(res)  
            })
    }
    
console.log(char)
    useEffect(() => {
        onUpdate();
    },[props.characterId])


        const load = loading ? <Spinner/> : null;
        const err = error ? <Error/> : null;
        const view =  !(loading || error || !char) ? <View char={char} /> : null
        const skeleton = char || loading || error ? null : <Skeleton/>

        return (
            <div className='heroName'>
                {load}
                {err}
                {skeleton}
                {view}
                <CustomForm/>
            </div>
        );
    
}



const View = ({char}) => {
    const [heroInformationLoaded, setHeroInformationLoaded] = useState(false)
    const {name, descr, img, homepage, wiki, comics}= char;
    const count = comics.length;


    const comicses = comics.map((item,i) => {
        
        if (i>9) {
            return 
        }
        return <Comics comics={item}/>
        
    })

    useEffect(() => {
        setHeroInformationLoaded(true)
    })
    

    return(

        <CSSTransition in={heroInformationLoaded} timeout={1000} classNames='char'>
           <div>
                <div className="heroName__avatar">
                    <img src={img} alt="hero" />
                    <div className="heroName__name">
                        {name}
                        <div className="heroName__buttons-wrapper">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="heroName__descr">
                {descr}
                </p>
                <div className="heroName__comics">Comics:</div>
                <ol className="heroName__comicses">
                    {count > 1? comicses : 'нет комиксов'}
                </ol>
           </div>
        </CSSTransition>


    )
    
}

export default HeroInformation;