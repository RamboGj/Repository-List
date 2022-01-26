import { useState } from "react"

interface GitHubRepositoryProps {
    id?: number;
    name?: string;
    full_name?: string;
    html_url: string;
    description?: string;
}

export default function RepoCard({full_name, html_url, description}: GitHubRepositoryProps) {
    const [moreInfo, setMoreInfo] = useState<boolean>(false)

    return (
        <div className="font-mono px-12 py-8 m-auto mt-12 rounded-xl w-10/12 h-fit border-teal-400 border-2">
            <h1 className="mx-auto text-xl text-cyan-500 mt-4 justify-center flex">{full_name}</h1>
            <a href={html_url} className="px-2 py-2 mx-auto hover:bg-amber-700 duration-300 text-white justify-center flex mt-2">{html_url}</a>
            {moreInfo === false &&
                <div className="flex">
                <button 
                onClick={() => {
                    setMoreInfo(!moreInfo)
                    }} 
                disabled={description !== null ? false : true}
                className={description !== null ? "mb-8 mt-8 mx-auto border-2 border-white duration-500 rounded-lg text-white bg-emerald-500 hover:bg-emerald-300 w-28 h-10" : "mb-8 cursor-not-allowed mt-8 mx-auto border-2 border-white rounded-lg bg-gray-400 w-28 h-10"}>more info</button>
                </div>
            }
            {moreInfo === true && 
                <>
                <div className="flex">
                <button 
                onClick={() => {
                    setMoreInfo(!moreInfo)
                    }} 
                className="mb-8 duration-500 mt-8 mx-auto border-2 border-white rounded-lg bg-emerald-900 hover:bg-gray-300 w-28 h-10 ">less info</button>
                </div>
                <p className="mt-8 mb-8 text-white flex justify-center">{description}</p>
                </>
            }
        </div>
    )
}