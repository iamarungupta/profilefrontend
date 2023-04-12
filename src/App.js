
import './App.css';
import Profile from './components/profile';
import Topheader from './components/topheader'; 
import About from './components/About';

import React from 'react';
import CipherMap from './components/CipherMap';
import WebLinks from './components/WebLinks';
import ProfesionalInfo from './components/ProfesionalInfo';
import Password from './components/Password';
import Interest from './components/Interest';

function App() {
  return (
    <div className="App">

      <div className="top--header"> <Topheader/> </div>
      <div className="profile_section"><Profile/></div>
      <div className="about_section"><About/></div>
      <div className="cipher_map_section"><CipherMap/> </div>     
      <div className="on_web_section"> <WebLinks/> </div>
      <div className="prof_info_section"><ProfesionalInfo/> </div>
      <div className="password_section"> <Password/></div>
      <div className="interest_section"> <Interest/> </div>

    </div>
  );
}

export default App;
