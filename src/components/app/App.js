
import './App.scss';

import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from '../header/Header';
import ComicsPage from '../pages/ComicsPage';
import MainPage from '../pages/MainPage';
import Page404 from '../pages/404';
import DynamicPage from '../pages/SingleComicPage';
import SingleComic from '../singleComic/SingleComic';
import useMarvelService from '../../services/MarvelService';
import SingleHero from '../singleHero/SingleHero';

import '../../style/container.scss'

const App = () => {

  const [comicInfo, setComicInfo] = useState(null)

  const {getComic,loading, getCharacter} = useMarvelService();

  const getComicInfo = (comicInfo) => {
    setComicInfo(comicInfo)
  }



  return (
    <Router>
      <div className='App'>
        <Header/>
        <main className='main'>

          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/comics' element={<ComicsPage/>}/>
            <Route path='*' element={<Page404/>}/>
            <Route path='/comics/:id' element={<DynamicPage getInfo={getComic} loading={loading} getComicInfo={getComicInfo} ><SingleComic comicsInfo={comicInfo}/></DynamicPage>}/>
            <Route path='/heroes/:id' element={<DynamicPage getInfo={getCharacter} loading={loading} getComicInfo={getComicInfo} ><SingleHero heroesInfo={comicInfo}/></DynamicPage>}/>
          </Routes>   

        </main>
      </div>
    </Router>
  );
  
}

export default App;
