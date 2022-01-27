import { useEffect, useState } from "react"
import Header from "./components/Header"

export default function App() {
  const [text, setText] = useState('')

  function handleOnChange(e: any) {
    setText(e.target.value)
    console.log(text)
  }

  return (
    <>
    <div className="relative bg-gray-900">
    <Header/>
    <main className="bg-zin-900 h-screen flex justify-center font-mono">
        <main className="mt-20 bg-zin-900 h-screen mx-auto flex place-content-start w-screen">
            <input value={text} onChange={handleOnChange} placeholder="Buscar..." type="search" className="mx-auto w-72 mt-16 flex border-0 h-8 rounded-lg bg-white" />
        </main>
    </main>
    </div>
    </>
  )
}