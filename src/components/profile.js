import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPen,faCamera} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
const Profile = ({props}) => {
  const {id}=useParams();
  const [image, setData] = useState(null)
  const [imageURL, setURL] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg")
  console.log(props);

  function fileSelectedHandler(e) {
    e.preventDefault();
    setData(e.target.files[0])
    const imgUrl = URL.createObjectURL(e.target.files[0])
    setURL(imgUrl);
    console.log(e.target.files[0])
    PutImage();
  }

  const PutImage = async () => {
    const newForm=new FormData()
    console.log(image)
    newForm.append("files",image)
    console.log(newForm)
    try {
    
      const response = await fetch("http://localhost:4000/upload/"+id, {
        method: "POST",
        body: newForm,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>
    <div
    class="flex py-8 px-8 w-full mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
     <input type="file" accept='image/*' id='proPic' style={{ display: 'none' }} onChange={fileSelectedHandler} />
     <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={imageURL} alt="Woman's Face"/>
    <label className="mx-2 btn"  htmlFor="proPic"><FontAwesomeIcon icon={faUserPen}/></label>

 
    <div class=" flex justify-between   w-full text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg text-black  font-semibold capitalize">
                {"Hello "+props.firstName}
            </p>
            <p class="text-slate-500 font-medium">
                {props.email}
            </p>
        </div>
        <div class="ml-10">
        <label for="message" class="block mb-2 text-md font-bold text-gray-900">Follower</label>
        </div>
    </div>
</div>
    </div>
  )
}

export default Profile
