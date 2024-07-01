import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [specialAllow, setSpecialAllow] = useState(false);
  const [password, setPassword] = useState("");
  const copyText = useRef(null);


  const copyButton = useCallback(()=>{
    copyText.current?.select() ;
    copyText.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password]);

  const updatePassword =()=>{
    passwordGenerator();
  }
  
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "";
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
    let numbers = "0123456789"
    let special = "!@##$%^&*()<>{}:;[]|"
    if(numAllow) str += numbers;
    if(specialAllow) str += special ;
    if(numAllow){
      pass += numbers.charAt(Math.floor(Math.random()*numbers.length)) ;
    }
    if(specialAllow){
      pass += special.charAt(Math.floor(Math.random()*special.length)) ;
    }
    for(let i = pass.length ; i < length ; i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    pass = pass.split('').sort(() => 0.5 - Math.random()).join('');
    setPassword(pass);
  },[length,numAllow,specialAllow,setPassword]) ;

  useEffect(()=>{
    passwordGenerator();
  },[length,numAllow,specialAllow])
  return (
    <>
    <div className='flex justify-center py-10'>
      <div className='bg-slate-300 w-[80%] rounded-[1.25rem] py-10 flex flex-col justify-center items-center'>
        <div className='font-medium mb-4'>Password Generator</div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          placeholder='Password'
          className='outline-none w-full py-1 px-3' 
          value={password}
          ref={copyText}
          readOnly
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyButton}
          >Copy</button>
        </div>
        <div className='flex gap-5 justify-center items-center'>
          <div>
            <input 
            type="range"
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label >Length: {length}</label>
          </div>
          <div>
            <input 
            type="checkbox"
            defaultChecked = {numAllow}
            onChange={(e)=>setNumAllow(e.target.checked)}
            />
            <label >Numbers</label>
          </div>
          <div>
            <input 
            type="checkbox"
            defaultChecked = {specialAllow}
            onChange={(e)=>setSpecialAllow(e.target.checked)}
            />
            <label >Characters</label>
          </div>
        </div>
        <div>
          <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-[1rem] mt-5'
            onClick={updatePassword}
            >New Password</button>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App