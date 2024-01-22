import { useEffect, useState } from "react"
import ComicsPrototype from "../comicsPrototype/ComicsPrototype";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";

import './comicsWrapper.scss'

const ComicsWrapper = () => {

    const [comics, setComics] = useState([]);
    const [limit, setLimit] = useState(12);
    const [loadComics, setLoadComics] = useState(true);
    const [clicked, setClicked] = useState(false);

    console.log(limit)


    const {loading, error, getComicses, loadMoreComicses} = useMarvelService();

    useEffect(() => {

        getComicses()
            .then(res => {
                setLoadComics(false)
                setComics(res.data.results)
            })
    }, [])

    const loadMore = () => {
        setClicked(true)
        setLimit(limit => limit + 4)
        loadMoreComicses(limit)
            .then(res => {
                setComics(res.data.results)
                setClicked(false)
            })
    }

    const load = (loading && loadComics) ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const view = (!loading || (!error && !loadComics)) ? <View clicked={clicked} comics={comics} loadMore={loadMore} /> : null;

    return (
        <div className="comicses">
            {load}
            {err}
            {view}
        </div>
    )
}

const View = ({comics, loadMore, clicked}) => {



    return (
        <>
        {comics.map(({title,thumbnail,id,prices}) => {
            return <ComicsPrototype title={title} cost={prices[0].price} img={`${thumbnail.path}.${thumbnail.extension}`} id={id} key={id}/>
        })}

        <button 
        style={{'background': clicked ? '#4b020b' : '#9F0013' , 'cursor' : clicked ? 'auto' : 'pointer' }}
         onClick={() => loadMore()} className="loadMore">LOAD MORE</button>
        </>
        
        
    )
}

export default ComicsWrapper;