import { HomeIcon } from "@heroicons/react/outline"
import { IoMdPerson } from 'react-icons/io'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { CustomLink } from "./ActiveLink"
export default function Header() {
    return (
        <>
        <header className="font-mono font-bold fixed w-full h-20 bg-green-300 text-2xl">
            <nav className="mt-6 flex justify-center gap-64">
                <div className="flex items-center hover:text-green-600 duration-300">
                    <HomeIcon className="w-6 h-6 mr-2 mb-px" aria-hidden="true" />
                    <CustomLink to="/">Home</CustomLink>
                </div>
                <div className="flex items-center hover:text-green-600 duration-300">
                    <IoMdPerson className="w-6 h-6 mr-2" aria-hidden="true"/>
                    <CustomLink to="/profile">Perfil</CustomLink>
                </div>
                <div className="flex items-center hover:text-green-600 duration-300">
                    <RiGitRepositoryFill className="w-6 h-6 mr-2 " aria-hidden="true"/>
                    <CustomLink to="/repositories">Repositórios</CustomLink>
                </div>  
            </nav>
        </header>
        </>
    )
    
}