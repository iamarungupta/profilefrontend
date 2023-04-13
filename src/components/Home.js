import React,{useEffect} from 'react'
import Profile from './profile';
import About from './About';
import CipherMap from './CipherMap';
import WebLinks from './WebLinks';
import ProfesionalInfo from './ProfesionalInfo';
import Password from './Password';
import Interest from './Interest';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {
    const [data,setData]=useState({});
    const {id}=useParams();
    // console.log("user's id ",id)
    const fetchData=async()=>{
      const res=await fetch("http://localhost:4000/profile/"+id);
      const json=await res.json();
      console.log(json);
      setData(json)
    }
    useEffect(()=>{
      fetchData();
    },[])
  return (
    <div>
       <div ><Profile props={data}/></div>
       <div className='border-2' ><About props={{data,setData}}/></div>
       <div className='border-2' ><CipherMap props={data}/></div>
       <div className='border-2' ><WebLinks props={{data,setData}}/></div>
       <div className='border-2' ><ProfesionalInfo props={data}/></div>
       <div className="border-2" > <Password props={data}/></div>
       <div > <Interest props={data}/> </div>
    </div>
  )
}

export default Home