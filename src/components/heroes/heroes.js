import React, { useState, useEffect, useRef } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './heroes.scss'


import Hero from '../hero/Hero';

const Heroes = (props) => {
    
    const [char, setChar] = useState([]);
    const [limit, setLimit] = useState(12);
    const [loadingMore, setLoadingMore] = useState(false);

    const [active, setActive] = useState([])

    const {loading,error,getAllCharacters,loadMore} = useMarvelService();

    const onClazz = (e) => {
        char.map((item,i) => {
            if (item.id == e.target.getAttribute(['data-id'])){
                const element = i;
                const newChars = char.map((item,j) => {
                    if (element === j) { 
                        return true          
                    } else {    
                        return null           
                    }
                })
                setActive(newChars)
            }
            
        })
    }



    useEffect(() => {
        

        getAllCharacters()
            .then(res => {
                setChar(res);
                
                
            })
            .catch(res => {
                
            })
    },[])
    
    const onLoadMore = (e) => {

        e.preventDefault();

        setLimit(limit => limit + 3);
        setLoadingMore(true);
        

        
        loadMore(limit)
            .then(res => {
                setChar(res);
                setLoadingMore(false);
                
            })
            .catch(res => {
                setLoadingMore(false)
            })

    }

    const load = loading && !loadingMore ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const button = !(error || loading) ? <AddChar onLoadMore={(e) => onLoadMore(e)}/> : null;
    const loadMoreChar = loadingMore ? <Spinner/> : null;
    return (
        
        <div className="">
            <ol className='heroes'>
                {load}
                {err}
                {char.map((item,i) => {
                    if (active[i] === true) {
                        return <Hero onClazz={onClazz} active={true} name={item.name} img={item.img} key={item.id} id={item.id} characterId={props.characterId}/>
                    } else {
                        return <Hero onClazz={onClazz} active={null} name={item.name} img={item.img} key={item.id} id={item.id} characterId={props.characterId}/>
                    }
                })}
            </ol>
            <div className="main__button">
                {loadMoreChar}  
                {button}          
            </div>
        </div>
        
    );
    
}

const AddChar = ({onLoadMore}) => {
    return (
        <a href="#" className="button button__main" onClick={onLoadMore}>
            <div className="inner">homepage</div>
        </a>
    )
}

export default Heroes;