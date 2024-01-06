import { useEffect, useState } from "react"
import ComicsPrototype from "../comicsPrototype/ComicsPrototype";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

import './comicsWrapper.scss'

const ComicsWrapper = () => {

    const [comics, setComics] = useState([]);

    const {loading, error, getComicses} = useMarvelService();

    useEffect(() => {
        getComicses()
            .then(res => {
                setComics(res.data.results)
            })
    }, [])

    console.log(comics)

    const load = loading ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const view =  !(loading || error) ? <View comics={comics} /> : null;

    return (
        <ol className="comicses">
            {load}
            {err}
            {/* {
                comics.map(({title,thumbnail,id,prices}) => {
                    return <ComicsPrototype title={title} cost={prices[0].price} img={`${thumbnail.path}.${thumbnail.extension}`} id={id} key={id}/>
                })
            } */}
            {view}

        </ol>
    )
}

const View = ({comics}) => {
    return (
        <>
        {comics.map(({title,thumbnail,id,prices}) => {
            return <ComicsPrototype title={title} cost={prices[0].price} img={`${thumbnail.path}.${thumbnail.extension}`} id={id} key={id}/>
        })}

        <button className="loadMore">LOAD MORE</button>
        </>
        
        
    )
}

export default ComicsWrapper;