import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxwyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (characterAllowed) {
      str += "!@#$%^&*-+"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

     setPassword(pass) 

  }, [length, numberAllowed, characterAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 font-mono'>
        <h1 className='text-white text-center my-3 font-bold text-lg'>Password Generator🗝️</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-nonerounded-full bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>Copy</button>

        </div>
        
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input 
                type="range"
                min={6}
                max={50}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input 
                type="checkbox"  
                defaultChecked = {numberAllowed}
                id='numberInput'
                onChange={() => {
                    setNumberAllowed((prev) => !prev)
                }}
                />
                <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 '>
            <input 
                type="checkbox"  
                defaultChecked = {characterAllowed}
                id='characterInput'
                onChange={() => {
                    setCharacterAllowed((prev) => !prev)
                }}
                />
                <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
