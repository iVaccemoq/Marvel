import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './comics.scss'

const Comics = (props) => {

    const getIdFromUrl = url => {
        const parts = url.split('/');
        return parts[parts.length - 1];
    };

    const id = getIdFromUrl(props.comics.resourceURI)

    return (
        <li className="comics">
            <Link to={`/comics/${id}`}>{props.comics.name}</Link>
        </li>
    );
}

export default Comics;