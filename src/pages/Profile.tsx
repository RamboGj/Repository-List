import { useEffect, useState } from "react";
import Header from "../components/Header";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiReact } from "react-icons/si"

export function Profile() {
    const [info, setInfo] = useState<any>([])
    const baseUrl = 'https://api.github.com/'

    useEffect(() => {
        fetch(`${baseUrl}users/RamboGj`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            setInfo(response)
        })
    }, [])

    return ( 
        <>
        <div className="relative bg-gray-900">
        <Header/>
        <main className="bg-zin-900 h-screen flex justify-center">
            <main className="mt-20 bg-zin-900 h-screen mx-auto flex place-content-start w-screen"> 
                <div>     
                    <img src={info.avatar_url} alt="Perfil" className="justify-start mt-16 ml-16 w-72 h-72 rounded-full border-2 border-green-300"/>
                    <h1 className="font-mono mt-12 justify-center text-2xl ml-12 text-amber-700">Author: <span className="hover:cursor-pointer hover:text-amber-500 duration-300">{info.login}</span></h1>
                    <p className="font-mono text-lg text-white ml-12 mt-8">{info.bio}</p>
                </div>                   
                <div className="ml-16 h-full w-6/12 border-l-2 border-white" >
                    <h1 className="justify-center flex font-mono text-3xl mt-16 text-white">COMPETÊNCIAS</h1>
                        <div className=" justify-items-center font-mono mt-24 grid grid-cols-2">
                            <div>
                                <SiTypescript className="text-blue-700 hover:brightness-100 hover:text-blue-500 duration-300 h-12 w-12 ml-5 place-items-center" aria-hidden="true"/>
                                <span className="mt-4 text-blue-700">TypeScript</span>
                            </div>
                            <div>
                                <SiTailwindcss className="text-cyan-400 h-12 w-12 ml-6" aria-hidden="true"/>
                                <span className="mt-4 text-cyan-400">TailwindCss</span>
                            </div>
                            <div className="mt-32">
                                <SiNextdotjs className="h-12 w-12" aria-hidden="true"/>
                                <span className="mt-4 text-white">NextJS</span>
                            </div>
                            <div className="mt-32">
                                <SiReact className="text-cyan-400 h-12 w-12 ml-2" aria-hidden="true"/>
                                <span className="mt-4 text-cyan-400">ReactJS</span>
                            </div>
                        </div>
                </div>
                
            </main>
            
        </main>
        </div>
        </>
    )
}