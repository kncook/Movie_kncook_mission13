import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TopBanner from './TopBanner';
import MovieList from './MovieList';
import Podcast from './Podcast';

const Main = () => (
  <>
    <Routes>
      <Route path="/" element={<TopBanner />}></Route>
      <Route path="/movieList" element={<MovieList />}></Route>
      <Route path="/podcast" element={<Podcast />}></Route>
    </Routes>
  </>
);

export default Main;
