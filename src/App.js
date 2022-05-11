import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

 import  Home  from './Pages/Home/Home';
 import  PlayList  from './Pages/Playlist/PlayList';
 import Search from './Pages/Search/Search';

import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/Navbar/BottomNav';


// import BottomNav from './Components/Navbar/BottomNav';


export default function App ()  {
  return (
  <Router>
   <Header/>
  <div className='app'>
    <Routes>
       <Route exact path="/" element={<Home/>}/>

       <Route exact path="/list" element={<PlayList/>}/>

        <Route exact path="/search" element={<Search/>}/>
         </Routes>
         </div>
  <SimpleBottomNavigation/> 
  </Router>
  );
}

