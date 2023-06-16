import React, { ChangeEvent, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home/Home';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/Theme';
import Header from './components/Header/Header';
import Features from './components/Home/Features';
import Favorites from './components/Favorites/Favorites';
import FavProvider from './components/Favorites/FavContext';
import Movie from './components/MoiveCard/Movie/Movie';
import NotFound from './components/NotFound/NotFound';

function App() {

  const [ query, setQuery ] = useState<string>('');

  const queryHandler = ( event: ChangeEvent<HTMLInputElement> ) =>{
      setQuery( event.target.value )
  };

  return (

    <ThemeProvider theme={theme}>
      
      <GlobalStyle />
      
      <FavProvider>

        <div className="App">
            <header>
                <Header query={query} queryHandler={queryHandler} />
            </header>
            <Routes>
              <Route path='/' element={<Home query={query} queryHandler={queryHandler} />} />
              <Route path='/movies-in-theatre' element={<Features route="/movie/now_playing" query={query} region="" />} />
              <Route path='/upcoming-movies' element={<Features route="/movie/upcoming" query={query} region="" />} />
              <Route path='/top-rated-india' element={<Features route="/movie/top_rated" query={query} region="IN" />} />
              <Route path='/top-rated-movies' element={<Features route="/movie/top_rated" query={query} region="" />} />
              <Route path='/:route/:movieId' element={<Movie />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
        </div> 
        
      </FavProvider>

    </ThemeProvider>
  );
}

export default App;
