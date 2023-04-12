import React,{useState} from 'react'
// import {EditOutlined,AudioOutlined } from '@ant-design/icons'; 
// import { Input } from "antd";

const WebLinks = () => {
  const [edit,setEdit]=useState(false);
  const [links,setLinks]=useState({
    linkedIn:"",
    github:"",
    facebook:"",
    twitter:"",
    instagram:"",
    website:""
  })

  const editLinks=()=>{
    console.log(links.facebook,links.github,links.instagram,links.twitter,links.website,links.linkedIn)
  }
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLinks({ ...links, [name]: value });
  }
  return (
  //   <div className='on_web_section--box1'>
  //      <Input
  //     placeholder="default size"
  //     prefix={<AudioOutlined />}
  //     addonAfter={<EditOutlined />}
  //     style={{width:'40%'}}
  //   />
  //    <Input
  //     placeholder="default size"
  //     prefix={<AudioOutlined />}
  //     addonAfter={<EditOutlined />}
  //     style={{width:'40%'}}
  //   />

  //    <Input
  //     placeholder="default size"
  //     prefix={<AudioOutlined />}
  //     addonAfter={<EditOutlined />}
  //     style={{width:'40%'}}
  //   />
  //    <Input
  //     placeholder="default size"
  //     prefix={<AudioOutlined />}
  //     addonAfter={<EditOutlined />}
  //     style={{width:'40%'}}
  //   />
  //    <Input
  //   placeholder="default size"
  //   prefix={<AudioOutlined />}
  //   addonAfter={<EditOutlined />}
  //   style={{width:'40%'}}
  // />     
  //  <Input
  //     placeholder="default size"
  //     prefix={<AudioOutlined />}
  //     addonAfter={<EditOutlined />}
  //     style={{width:'40%'}}
  //   /> 
  //   </div>
  <div className="mx-auto w-11/12 my-2" >

<div className="flex w-full   justify-between items-end p-2">
<label for="message" class="block mb-2 text-md font-bold text-gray-900">ON THE WEB</label>
<button class="inline-flex text-white bg-[#f3912e] border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg" onClick={()=>{
  if(edit){
    editLinks();
  }
  setEdit(!edit)
}}>{edit?"Save":"Edit"}</button>
</div>


    
    <form>
        <div class="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-black font-medium" for="linkedIn">LinkedIn</label>
                <input id="linkedIn" type="text" name='linkedIn' class="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring" disabled={!edit} onChange={handleInputs}/>
            </div>

            <div>
                <label class="text-black font-medium" for="github">Github</label>
                <input id="github" type="text" name='github' class="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring" disabled={!edit} onChange={handleInputs}/>
            </div>

            <div>
                <label class="text-black font-medium" for="facebook">Facebook</label>
                <input id="facebook" type="text" name="facebook" class="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring" disabled={!edit} onChange={handleInputs}/>
            </div>

            <div>
                <label class="text-black font-medium" for="twitter">Twitter</label>
                <input id="twitter" type="text" name='twitter' class="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" disabled={!edit} onChange={handleInputs}/>
            </div>
            <div>
                <label class="text-black font-medium" for="instagram">Instagram</label>
                <input id="instagram" type="text" name='instagram' class="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" disabled={!edit} onChange={handleInputs}/>
            </div>
            <div>
                <label class="text-black font-medium" for="website">Website</label>
                <input id="website" type="text" name='website' class="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring" disabled={!edit} onChange={handleInputs}/>
            </div>
        </div>

       
    </form>




    </div>
 
  )
}

export default WebLinks
