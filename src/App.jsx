import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Articles from './Components/Articles/Articles';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import More from './Components/More/More';
import ToDo from './Components/ToDos/ToDos';

const App = () => {

  return (
<div style={{padding:'20px 40px' }}>
  <Header/>
  <Routes>
    <Route exact path='/' element={<Articles/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/todo' element={<ToDo/>}/>
    <Route exact path='/more' element={<More/>}/>
    <Route exact path='/login' element={<Login/>}/>
  </Routes>
  
    </div>
  );
}

export default App;
