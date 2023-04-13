import React,{useState} from 'react'

const ProfesionalInfo = () => {
  const [edit,setEdit]=useState(false);
  return (
    // <div className='prof_info_section--box1'>
    //   prof_info_section--box1
    // </div>
<div className='mx-auto w-11/12 my-2'>


<div className="flex w-full   justify-between items-end p-2">
<label for="message" class="block mb-2 text-md font-bold text-gray-900">PROFESSIONAL INFORMATION</label>
<button class="inline-flex text-white bg-[#f3912e] border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg" onClick={()=>{
  setEdit(!edit)
}}>{edit?"Save":"Edit"}</button>
</div>

<div class="w-full mx-auto">

<div  class="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2">

    <div>

    <label for="countries" class="block mb-2 text-md font-medium text-gray-900 dark:text-black-400">Highest education </label>
      <select id="countries" disabled={!edit} class=" border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Primary</option>
      <option value="US">Secondary</option>
      <option value="CA">Higher Secondary</option>
      <option value="FR">Graduation</option>
      <option value="DE">Post Graduation</option>
  </select>

    </div>
    <div>

    <label for="countries" class="block mb-2 text-md font-medium text-gray-900 dark:text-black-400">What do you do currently?</label>
      <select id="countries" disabled={!edit}class=" border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Primary</option>
      <option value="US">Secondary</option>
      <option value="CA">Higher Secondary</option>
      <option value="FR">Graduation</option>
      <option value="DE">Post Graduation</option>
  </select>

    </div>

</div>

</div>
    </div>
  )
}

export default ProfesionalInfo
