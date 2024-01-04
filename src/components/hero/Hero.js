
const Hero = ({name, img, characterId, id, onClazz,active,}) => {

    let clazz = "heroes__hero"

    if (active) {
        clazz += ' heroes__selected'
    }

    return ( 
        <li 
        data-id={id}
        key={id}
        className={clazz}
        onClick={(e) => {
            characterId(id)
            onClazz(e)
        }}
        >
            <img src={img} alt="hero" data-id={id}/>
            <div className="heroes__name" data-id={id}>{name}</div>
        </li>
    );
    
}

export default Hero;