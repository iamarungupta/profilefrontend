import React from 'react'
import {EditOutlined,AudioOutlined } from '@ant-design/icons'; 
import { Input } from "antd";

const WebLinks = () => {
  return (
    <div className='on_web_section--box1'>
       <Input
      placeholder="default size"
      prefix={<AudioOutlined />}
      addonAfter={<EditOutlined />}
      style={{width:'40%'}}
    />
     <Input
      placeholder="default size"
      prefix={<AudioOutlined />}
      addonAfter={<EditOutlined />}
      style={{width:'40%'}}
    />

     <Input
      placeholder="default size"
      prefix={<AudioOutlined />}
      addonAfter={<EditOutlined />}
      style={{width:'40%'}}
    />
     <Input
      placeholder="default size"
      prefix={<AudioOutlined />}
      addonAfter={<EditOutlined />}
      style={{width:'40%'}}
    />
     <Input
    placeholder="default size"
    prefix={<AudioOutlined />}
    addonAfter={<EditOutlined />}
    style={{width:'40%'}}
  />     
   <Input
      placeholder="default size"
      prefix={<AudioOutlined />}
      addonAfter={<EditOutlined />}
      style={{width:'40%'}}
    /> 
    </div>
  )
}

export default WebLinks
