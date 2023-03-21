import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Chapters() {

    const [openAccordian, setOpenAccordian] = useState(1);

  return (
    <>
    <section>
<div class="container px-6 mx-auto  bg-gradient-to-r from-sky-700 to-blue-700 subpixel-antialiased">

<section class="mb-32 text-gray-800 background-radial-gradient ">
 

  <div class="px-6 py-12 md:px-12 text-center lg:text-left">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 flex items-center">
        <div class="mt-16 lg:mt-0">
          <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-8 text-white"
            >
            Class   <span>10<sup>th</sup></span> - Science
          </h1>
          <p class="text-lg text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
            adipisci tenetur repudiandae rerum quos.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
</section>

<section className='w-11/12 mx-auto'>
  <div
    class="rounded-t-lg border border-neutral-200 bg-white">
    <h2>
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none [&:not [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
        type="button"
        onClick={()=>{
            (openAccordian)?setOpenAccordian(0):setOpenAccordian(1);
        }}
        >
        <i class="fa-solid fa-pen mr-4 text-sky-700"></i><span className='font-medium'>Science</span>
        <span
          class={` ml-auto h-5 w-5 shrink-0 ${openAccordian?"rotate-[-180deg]":"rotate-[0deg]"} fill-[#336dec] transition-transform duration-300 ease-in-out `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      class={`${openAccordian?"":"hidden"}`}
      >
      <div class="py-4 px-5">
      <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-md font-light">
          <thead class="border-b font-medium">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Chapter Name</th>
              <th scope="col" class="px-6 py-4">Video</th>
              <th scope="col" class="px-6 py-4">PDF</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b text-black">
              <td class="whitespace-nowrap px-6 py-4 font-medium">Chapter-1</td>
              <td class="whitespace-nowrap px-6 py-4">Chemical Reactions and Equations</td>
              <td class="whitespace-nowrap px-6 py-4">Link</td>
              <td class="whitespace-nowrap px-6 py-4">Link</td>
            </tr>

            <tr class="border-b text-black">
              <td class="whitespace-nowrap px-6 py-4 font-medium">Chapter-2</td>
              <td class="whitespace-nowrap px-6 py-4">Acids Bases and Salts</td>
              <td class="whitespace-nowrap px-6 py-4">Link</td>
              <td class="whitespace-nowrap px-6 py-4">Link</td>
            </tr>


            <tr class="border-b text-black">
              <td class="whitespace-nowrap px-6 py-4 font-medium">Chapter-3</td>
              <td class="whitespace-nowrap px-6 py-4">Metals and Non-Metals</td>
              <td class="whitespace-nowrap px-6 py-4">Link</td>
              <td class="whitespace-nowrap px-6 py-4">Link</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</section>





</>

  )
}

export default Chapters