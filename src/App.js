import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

 import  Home  from './Pages/Home/Home';
 import  PlayList  from './Pages/Playlist/PlayList';
 import Search from './Pages/Search/Search';

import Header from './Components/Header/Header';
//import SimpleBottomNavigation from './Components/Navbar/BottomNav';
import Signup from './Pages/Signup/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './Components/contexts/AuthContext';
import Login from './Pages/Login/Login';
// import PrivateRoute from './Components/PrivateRoutes/PrivateRoutes';


// import BottomNav from './Components/Navbar/BottomNav';


export default function App ()  {
  return (
  <Router >
   <Header/>
  <div className='app'>
      <AuthProvider>
    <Routes>
       <Route exact path="/" element={
         <Container className ="d-flex align-items-center justify-content-center"
         style={{minHeight: "100vh"}}>
           <div className='w-100' style={{maxWidth: "400px"}}>
       <Signup/>
       </div>
       </Container>
       }/>

      <Route exact path="/login" element={
         <Container className ="d-flex align-items-center justify-content-center"
         style={{minHeight: "100vh"}}>
           <div className='w-100' style={{maxWidth: "400px"}}>
       <Login/>
       </div>
       </Container>
       }/>

      {/* <Route exact path="/login" element={<Login/>}/> */}

       <Route exact path="/home" element={<Home/>}/>

       <Route exact path="/list" element={<PlayList/>}/>

        <Route exact path="/search" element={<Search/>}/>
         </Routes>
         </AuthProvider>
         </div>
  
  </Router>
  );
}

