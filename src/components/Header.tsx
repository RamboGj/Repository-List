import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/outline"
import { IoMdPerson } from 'react-icons/io'
import { RiGitRepositoryFill } from 'react-icons/ri'

export default function Header() {
    return (
        <>
        <header className="font-mono font-bold fixed w-full h-20 bg-green-300 text-white text-2xl font-mono">
            <nav className="mt-6 flex justify-center gap-64">
                <div className="flex items-center hover:text-green-600 duration-300">
                    <HomeIcon className="w-6 h-6 mr-2 mb-px" aria-hidden="true" />
                    <Link className="" to="/">Home</Link>
                </div>
                <div className="flex items-center hover:text-green-600 duration-300">
                    <IoMdPerson className="w-6 h-6 mr-2 " aria-hidden="true"/>
                    <Link className="hover:text-green-600 duration-300" to="/profile">Perfil</Link>
                </div>
                <div className="flex items-center hover:text-green-600 duration-300">
                    <RiGitRepositoryFill className="w-6 h-6 mr-2 " aria-hidden="true"/>
                    <Link className="hover:text-green-600 duration-300" to="/">Repositórios</Link>
                </div>  
            </nav>
        </header>
        </>
    )
    
}