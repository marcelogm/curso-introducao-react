'use client'
import { useState } from "react"

//                                 propriedades
//                                      |
//                                      v
export default function CounterButton(props) {
  //   desconstrucao
  //        |
  //        v
  const { title } = props

  //    valor do  atualiza o      hook
  //     estado     estado          |
  //        |         |             |
  //        V         v             v
  const [counter, setCounter] = useState(0)
  //                                     ^
  //                                     |
  //                                valor inicial
  
  const handleClick = () => {
    setCounter(counter + 1)
  }

  // <> </> é um fragmento
  return (
    <>
      { /*         interpolação  */ }
      { /*               |       */ }
      { /*               v       */ }
      <div>Contagem: {counter} </div>
      { /*       lida com evento */ }
      { /*               |       */ }
      { /*               v       */ }
      <button onClick={handleClick} 
        className="bg-gray-100 m-5 p-1 rounded text-black">
        {title}
      </button>
    </>
  )
}
