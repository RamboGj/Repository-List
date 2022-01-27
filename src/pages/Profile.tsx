import { useEffect, useState } from "react";
import Header from "../components/Header";

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
            <main className="mt-20 bg-zin-900 h-max mx-auto grid-cols-3 gap-4 place-content-start w-screen">
                <img src={info.avatar_url} alt="Perfil" className="col-span-4 justify-start mt-16 ml-16 w-72 h-72 rounded-full border-2 border-green-300"/>
                <p className="font-mono text-lg text-white ml-16 mt-8">{info.bio}</p>
            </main>
        </main>
        </div>
        </>
    )
}