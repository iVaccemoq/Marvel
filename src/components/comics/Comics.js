import React, { Component } from 'react';

import './comics.scss'

const Comics = (props) => {
    return (
        <li className="comics">{props.comics}</li>
    );
}

export default Comics;