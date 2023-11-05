import React, { Component } from 'react';

import Thor from '../../resources/img/Thor.jpg'

import './heroes.scss'

import Hero from '../hero/Hero';
class Heroes extends Component {
    
    render() {
        return (
            <ol className='heroes'>
                <Hero/>
                <Hero/>
                <Hero/>
                <Hero/>
                <Hero/>
                <Hero/>
                <Hero/>
                <Hero/>
                <Hero/>
            </ol>
        );
    }
}

export default Heroes;