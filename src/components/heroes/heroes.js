import React, { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './heroes.scss'

import Hero from '../hero/Hero';

class Heroes extends Component {
    state = {
        char:[],
        error: false,
        loading: true
    }

    componentDidMount = () => {
        const heroes = new MarvelService();
        heroes.getAllCharacters()
            .then(res => {
                const heroesArr = res.map(item => (
                    <Hero name={item.name} img={item.img} key={item.id} />
                ));
                this.setState({ char: heroesArr, loading: false});
            })
            .catch(res => {
                this.setState({ error: true, loading: false})
            })
    }
    render() {
        const {loading,error,char} = this.state;

        const load = loading ? <Spinner/> : null;
        const err = error ? <Error/> : null;
        const chars = !(error || loading) ? char : null;

        return (
            <ol className='heroes'>
                {load}
                {err}
                {chars}
            </ol>
        );
    }
}

export default Heroes;