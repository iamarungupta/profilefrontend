import React,{useContext} from 'react'
import Profile from './profile';
import About from './About';
import CipherMap from './CipherMap';
import WebLinks from './WebLinks';
import ProfesionalInfo from './ProfesionalInfo';
import Password from './Password';
import Interest from './Interest';
import { useParams } from 'react-router-dom';
const Home = () => {
    const {id}=useParams();
    console.log("user's id ",id)
  return (
    <div>
   <div ><Profile/></div>
       <div className='border-2'><About/></div>
       <div className='border-2'><CipherMap/></div>
       <div className='border-2'><WebLinks/></div>
       <div className='border-2'><ProfesionalInfo/></div>
       <div className="border-2"> <Password/></div>
       <div > <Interest/> </div>
    </div>
  )
}

export default Home