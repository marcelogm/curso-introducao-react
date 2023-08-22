import { useEffect, useState } from "react"

//  Life cycle 
//
//  [mount]
//    |
//    v
//  [update] <--
//    |        |
//    v        |
//  [state changed]
//    |
//    v
//  [dismount]
//
export default function TextInput() {
  const [text, setText] = useState()

  useEffect(() => {
    // executa quando o componente é criado
    console.log("mount")

    return () => {
      // executa quando o componente é destruído
      console.log("dismount")
    }
  }, [])

  useEffect(() => {
    // executa quando o estado "text" muda
    console.log("text changed")
  }, [text])

  const handleText = (e) => {
    setText(e.target.value)
  }

  // executa sempre
  console.log("render")

  return (
    <>
      <div className="bg-gray-100 h-80 w-screen p-5 overflow-scroll">
        {text}
      </div>
      <div className="m-2 mt-6 flex justify-center">
        <label className="mr-2 w-1/12 p-2" for="text-input">Digite: </label>
        <input id="text-input"
          className="w-10/12 p-2 h-10 rounded bg-gray-200"
          value={text}
          onChange={handleText} />
      </div>
    </>
  )
}

