import { useEffect, useState } from "react";
import templates from './csvjson.json'
import {useNavigate} from 'react-router-dom'
import templateOne from './templatesOne.json'

const MemeTemplates = () => {
    const [data,setData]=useState()
    const [count,setCount]=useState(30)
    const [search,setSesrch]=useState("")
    const navigate=useNavigate()

  useEffect(()=>{
    const regex = new RegExp(`${search}`, 'gi')

  let dataOne=templateOne.filter(val=>(regex.test(val.title)))
  console.log(dataOne)
  setData(dataOne.slice(0,count))
  },[search,count])
  
    return ( <div className="container">
      <div className="my-6 w-1/2 mx-auto">
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Search</label>
        <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
        placeholder="Search Memes" 
        onChange={e=>setSesrch(e.target.value)}
        value={search}
        />
    </div> 
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Templates</h2>

     
    </div>

    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
    
   {data?.map(val=>(
      <div>
       
        <div
       
        className="group relative mb-2 block h-80 rounded-lg bg-gray-100 lg:mb-3">
          <img src={val.url} loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center transition duration-200 group-hover:opacity-50 " />
          <button className="absolute  top-1/2 left-2 z-10  p-2 rounded-lg font-bold text-gray-100  bg-black w-56 hidden group-hover:block "
          onClick={e=>navigate("/meme-generator",{state:{url:val.url}})}
          >
            Select this template
          </button>
        </div>

        <div>
        
         
        </div>
      </div>))}
      <button onClick={e=>setCount(count+20)} 
      
      className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</button>
    </div>
  </div>
</div>
    </div> );
}
 
export default MemeTemplates;