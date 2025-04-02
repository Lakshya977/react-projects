import { useState } from "react"

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <>
      <div className="w-fill h-screen duration-200"
          style={{
            backgroundColor: color
          }}
          >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
              <div className="flex flex-wrap justify-center shadow-lg bg-white gap-3 px-3 py-2 rounded-3xl">
                <button onClick={()=>{setcolor("red")}} className="outline-none px-4 rounded-full text-white shadow-large" style={{backgroundColor: "red"}}>Red</button>
                <button onClick={()=>{setcolor("blue")}} className="outline-none px-4 rounded-full text-white shadow-large" style={{backgroundColor: "blue"}}>Blue</button>
                <button onClick={()=>{setcolor("green")}} className="outline-none px-4 rounded-full text-white shadow-large" style={{backgroundColor: "green"}}>Green</button>
                <button onClick={()=>{setcolor("yellow")}} className="outline-none px-4 rounded-full text-black shadow-large" style={{backgroundColor: "yellow"}}>Yellow</button>
              </div>
            </div>
      </div>
    </>
  )
}

export default App
