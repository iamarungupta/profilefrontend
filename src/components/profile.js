import React from 'react'

const Profile = () => {
  return (
    <div>
      <div
    class="flex py-8 px-8 w-full mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face"/>
    <div class=" flex justify-between   w-full text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg text-black  font-semibold">
                Hello
            </p>
            <p class="text-slate-500 font-medium">
                Abc1223@gmail.com
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
