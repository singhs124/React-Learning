import React, { useState } from 'react'

const App = () => {
  const [color,setColor] =  useState("green");
  
  return (
    <>
      <div className={`w-full h-screen`} style={{backgroundColor:color}}>
        <div className='flex items-end justify-center w-full h-full pb-10'>
          <div className='h-[10%] bg-white flex items-center justify-center text-white gap-3 rounded-[1.5rem] px-5'>
            <button className='bg-red-500 py-2 px-4 rounded-[1rem]' onClick={()=>setColor("red")} >Red</button>
            <button className='bg-blue-500 py-2 px-4 rounded-[1rem]' onClick={()=>setColor("blue")} >Blue</button>
            <button className='bg-green-500 py-2 px-4 rounded-[1rem]' onClick={()=>setColor("green")} >Green</button>
            <button className='bg-violet-500 py-2 px-4 rounded-[1rem]' onClick={()=>setColor("violet")} >Violet</button>
            <button className='bg-black py-2 px-4 rounded-[1rem]' onClick={()=>setColor("black")} >Black</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App