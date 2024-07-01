import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setdata] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/singhs124')
    //     .then((res)=> res.json())
    //     .then((data)=> setdata(data))
    // })
    const data = useLoaderData();
  return (
    <>
        <div className='bg-gray-700 text-white text-3xl text-center'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt={data.login} width={200} height={200}/>
        </div>
    </>
  )
}

export const githubInfo = async ()=>{
    const data = await fetch('https://api.github.com/users/singhs124');
    return data.json();
}

export default Github