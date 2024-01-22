import { CSSTransition } from "react-transition-group";
import { useState,useEffect } from "react";
import './char.scss'

const Hero = ({name, img, characterId, id, onClazz,active}) => {
    const [charLoaded,setCharLoaded] = useState(false)
    let clazz = "heroes__hero"

    if (active) {
        clazz += ' heroes__selected'
    }

    useEffect(() => {
        setCharLoaded(true)
    },[])

    return ( 
        <>
        <CSSTransition in={charLoaded} timeout={1000} classNames='char'>
            <li 
                data-id={id}
                key={id}
                className={clazz}
                onClick={(e) => {
                    characterId(id)
                    onClazz(e)
                }}
            >
                <img  src={img} alt="hero" data-id={id} onClick={() => setCharLoaded(true)}/>
                <div className="heroes__name" data-id={id}>{name}</div>
            </li>
        </CSSTransition>
        </>
        
    );
    
}

export default Hero;