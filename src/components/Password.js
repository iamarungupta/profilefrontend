import React, { useState } from 'react'

const Password = () => {

  const [display, setdisplay] = useState(false);
  const [password, setpassword] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: ""
  })
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpassword({ ...password, [name]: value });
  }

  const toggle = () => {
    setdisplay(!display);
  }
  const savepassword = (e) => {
    e.preventDefault();
    console.log(password.currentpassword, password.newpassword, password.confirmpassword);
  }
  return (
    //  { <div className='password_section--box1'>
    //     password_section--box1
    //   </div>
    // )}


    
      <div className="mx-auto w-11/12 my-2" >

        <div className="flex w-full   justify-between items-end p-2">
          <label for="message" class="block mb-2 text-md font-bold text-gray-900">PASSWORD & SECURITY</label>
          <button onClick={toggle} class="inline-flex text-white bg-[#f3912e] border-0 py-2 px-2.5 focus:outline-none hover:bg-orange-500 rounded text-lg" >Change</button>

        </div>


        <form>
          <div class="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-1">
            <div>
              <label class="text-black font-medium" for="password0">Password</label>
              <input id="password0" placeholder="************" type="password" name='password0' class=" appearance-none text-md block w-full px-4 py-3 mt-2 text-black-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring" disabled='false' />
            </div>
          </div>

        </form>




        {display ? <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed  z-50  w-full h-screen  p-4 overflow-x-hidden overflow-y-auto bg-gray-700 bg-opacity-30  top-0 left-0 flex justify-center" style={{paddingTop:'25vh'}}>
          <div class="relative w-full max-w-md max-h-full">

            <div class="relative bg-gray-200 rounded-lg shadow ">
              
              <div class="px-6 py-6 lg:px-8">

                <form class="space-y-6" action="#">

                  <div>
                    <label for="password1" class="block mb-2 text-sm font-medium text-gray-900 ">Current Password</label>
                    <input name='currentpassword' onChange={handleInputs} type="password" id="password1" placeholder="Current Password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " required />
                  </div>
                  <div>
                    <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                    <input name='newpassword' onChange={handleInputs} type="password" id="password2" placeholder="New Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />
                  </div>
                  <div>
                    <label for="password3" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                    <input name='confirmpassword' onChange={handleInputs} type="password" id="password3" placeholder="Confirm Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                  </div>
                  <div className="flex w-full   justify-end items-end p-2">
                    <button onClick={toggle} class="inline-flex text-white bg-[#080f0fd9]  border-0 mx-5 py-2 px-2.5 focus:outline-none hover:bg-orange-500 rounded text-lg" >Cancel</button>

                    <button onClick={(e)=>{savepassword(e)}} class="inline-flex text-white bg-[#f3912e] border-0 py-2 px-4 focus:outline-none hover:bg-orange-500 rounded text-lg" >Save</button>

                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
          : null}
      </div>
    
  )

}

export default Password;
