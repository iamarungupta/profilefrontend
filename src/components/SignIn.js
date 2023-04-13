import React, { useState ,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
const SignIn = () => {
  
    const navigate=useNavigate()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const userSignIn= async()=>{
        console.log(email,password)
        const data={
            email:email,
            password:password
        }
        try {
            const res=await fetch("http://localhost:4000/login",{
                method:"POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const json=await res.json();
           console.log(json)
           const id=json._id;
            navigate('/profile/'+id)
            
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
 <div>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg">
    <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
      Get started today
    </h1>

    <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
      dolores deleniti inventore quaerat mollitia?
    </p>

    <form
      action=""
      class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p class="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
          />

          <span
            class="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
          <input
            type="password"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password"
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />

          <span
            class="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="submit"
        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        onClick={(e)=>{
            e.preventDefault();
            userSignIn();
        }}
      >
        Sign in
      </button>

      <p class="text-center text-sm text-gray-500">
        No account?
        <a class="underline" href="/signup">Sign up</a>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}

export default SignIn