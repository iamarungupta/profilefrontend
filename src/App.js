
import './App.css';
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Topheader from './components/topheader'; 
import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <div className="top--header"> <Topheader/> </div>
    //   <div className="profile_section"><Profile/></div>
    //   <div className="about_section"><About/></div>
    //   <div className="cipher_map_section"><CipherMap/> </div>     
    //   <div className="on_web_section"> <WebLinks/> </div>
    //   <div className="prof_info_section"><ProfesionalInfo/> </div>
    //   <div className="password_section"> <Password/></div>
    //   <div className="interest_section"> <Interest/> </div>
    // </div>
    <div>
    <Routes>
      <Route path='/' element={<SignIn />}></Route>
      <Route path='/Signup' element={<SignUp/>}></Route>
      <Route path='/profile/:id' element={<Home/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
