import { useCallback, useState } from 'react'


function App() {
  const [length,setlength] = useState(8)
  const [number,setnumber] = useState(false)
  const [character,characterset] = useState(false)
  const [Password,Passwordset] = useState("")
  const Passwordgenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "012345678"
    if(character) str+= "!@#$%^&*(){}"

    for(let i=1;i<= length;i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
Passwordset(pass)
  }  ,[character,number,length,Passwordset])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-white bg-center">
      <h1 className="text-2xl text-center mb-4 place-items-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3 text-black"
          placeholder="Password"
          readOnly
        />
        <button
          onClick={Passwordgenerator}
          className="bg-orange-500 text-white px-3 py-1 shrink-0 hover:bg-orange-600"
        >
          Generate
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={number}
            onChange={() => setnumber((prev) => !prev)}
          />
          <label>Include Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={character}
            onChange={() => characterset((prev) => !prev)}
          />
          <label>Include Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
