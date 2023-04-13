import React, { useState } from 'react'

const About = () => {
  const [edit,setEdit]=useState(false);
  const [about,setAbout]=useState("");
  const editAbout=()=>{
    console.log(about);
  }
  return (
    <div className='mx-auto w-11/12 my-2'>
      
      {/* <div className='about_section--box2'>
      <span>ABOUT ME</span>
      <button type='button '><span>EDIT</span></button>
      </div>

      <div className='about_section--box1--content' >content of about me will go here</div> */}





<div className="flex w-full   justify-between items-end p-2">
<label for="message" class="block mb-2 text-md font-bold text-gray-900">ABOUT ME</label>
<button class="inline-flex text-white bg-[#f3912e] border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg" onClick={()=>{
  if(edit===true){
      editAbout();
  }
  setEdit(!edit)
}}>{edit?"Save":"Edit"}</button>
</div>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..." disabled={!edit} onChange={(e)=>{
setAbout(e.target.value);
}}></textarea>

      
    </div>
  )
}

export default About
