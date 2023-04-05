import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TopBanner from './TopBanner';
import MovieList from './MovieList';
import Podcast from './Podcast';
import MovieList2 from './movie/MovieList2';
//this is the routing page that define the specific paths so that it can pull content from TopBanner, Podcast, etc.
const Main = () => (
  <>
    <Routes>
      <Route path="/" element={<TopBanner />}></Route>
      <Route path="/movieList" element={<MovieList />}></Route>
      <Route path="/podcast" element={<Podcast />}></Route>
      <Route path="/movieList2" element={<MovieList2 />}></Route>
    </Routes>
  </>
);

export default Main;
