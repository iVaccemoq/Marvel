import { useParams } from 'react-router-dom'

import Spinner from "../spinner/Spinner";
import Page404 from './404';

import './singleComicsPage.scss'
import { useEffect, useState } from 'react'

const DynamicPage = (props) => {

    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);

    const {id} = useParams();

    useEffect(() => {   

        if (!Number.isFinite(+id)) {
            setError(true);
            return
        }

        props.getInfo(id)
            .then(res => {
                setInfo(res);
                props.getComicInfo(res)
                return res
            })
    }, [id])




    const load = props.loading ? <Spinner/> : null;
    const err = error ? <Page404/> : null;
    const view =  !(props.loading || error || !info) ? props.children : null
   

    return (
        <>
            {load}
            {err}
            {view}
        </>
    )
}


export default DynamicPage