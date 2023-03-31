//this is what was taught and learned within the videos

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import TopBanner from './firstPage';
// import MovieList from './Movies';
// import Podcast from './Podcast';
// // import { Link, Route, Router } from 'react-router-dom';
// //import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// //header
// class Welcome extends React.Component {
//   render() {
//     return (
//       <h2>
//         {' '}
//         This website is an accumulation of the famous Joel Hilton's movie
//         collection and podcasts. He is pictured here (in his much younger days).
//       </h2>
//     );
//   }
// }

// //footer
// class Conclusion extends React.Component {
//   render() {
//     return <p>Hope you enjoyed!</p>;
//   }
// }

// //App is the parent of the components below: Welcome, AmountofGo, etc
// function App() {
//   return (
//     <div>
//       {/* <AppRouter /> */}
//       <TopBanner saying="Hilton's Movie Site" />
//       <TopBanner saying="Hilton's Podcast Page" />
//       <Navbar />
//       <Welcome />
//       {/* <MovieList /> */}
//       <br />
//       <Conclusion />
//     </div>
//   );
// }

// export default App;

//Below is what is needed specifically to allow routing to different pages, much simpler then above
import { BrowserRouter } from 'react-router-dom';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './Navbar';
import Routes from './Routes';

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </>
  );
}
export default App;
