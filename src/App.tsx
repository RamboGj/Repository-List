import { useEffect, useState } from "react"
import RepoCard from "./components/repoCard"

interface RepoProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

function App() {
  const [repoData, setRepoData] = useState<RepoProps[]>([])
  const baseUrl = 'https://api.github.com/'

  useEffect(() => {
    fetch(`${baseUrl}users/RamboGj/repos`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setRepoData(response)
    })

  }, [])
  
  return (
    <div className="bg-gray-900">
      <main className="bg-zin-900 h-full flex justify-center mx-auto">
      <ul className="mt-16 mb-24">
        {repoData.map(repo => {
          return (
            <RepoCard key={repo.id} full_name={repo.name} html_url={repo.html_url} description={repo.description} />
          )
        })}
      </ul>
      </main>
    </div>
  )
}

export default App
