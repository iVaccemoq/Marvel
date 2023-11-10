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
        loading: true,
        limit: 12,
        loadingMore: false
    }

    componentDidMount = () => {
        const heroes = new MarvelService();
        heroes.getAllCharacters()
            .then(res => {
                const heroesArr = res.map(item => (
                    <Hero name={item.name} img={item.img} key={item.id} id={item.id} characterId={this.props.characterId}/>
                ));
                this.setState({ char: heroesArr, loading: false});
            })
            .catch(res => {
                this.setState({ error: true, loading: false})
            })
    }

    onLoadMore = (e) => {
        e.preventDefault();

        this.setState({ limit: this.state.limit + 3, loadingMore: true })

        const heroes = new MarvelService();

        heroes.loadMore(this.state.limit)
            .then(res => {
                const heroesArr = res.map(item => (
                    <Hero name={item.name} img={item.img} key={item.id} id={item.id} characterId={this.props.characterId}/>
                ));
                this.setState({ char: heroesArr, loadingMore: false});
            })
            .catch(res => {
                this.setState({ error: true, loadingMore: false})
            })

    }

    render() {
        const {loading,error,char, loadingMore} = this.state;

        const load = loading ? <Spinner/> : null;
        const err = error ? <Error/> : null;
        const chars = !(error || loading) ? char : null;
        const button = !(error || loading) ? <AddChar onLoadMore={(e) => this.onLoadMore(e)}/> : null;
        const loadMore = loadingMore ? <Spinner/> : null;

        return (
            <div className="">
                <ol className='heroes'>
                    {load}
                    {err}
                    {chars}
                </ol>
                <div className="main__button">
                    {loadMore}  
                    {button}          
                </div>
            </div>
            
        );
    }
}

const AddChar = ({onLoadMore}) => {
    return (
        <a href="#" className="button button__main" onClick={onLoadMore}>
            <div className="inner">homepage</div>
        </a>
    )
}

export default Heroes;