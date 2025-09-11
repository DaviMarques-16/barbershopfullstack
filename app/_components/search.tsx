'use client'

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from 'react'
import { useRouter } from "next/navigation";

const Search = () => {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSubmit = () => {
        router.push(`/barbershops?search=${search}`)
    }

    return ( 
        <div className="flex items-center gap-2">
          <Input 
          placeholder="Faça sua busca..."
          value = {search}
          onChange={(e) => setSearch(e.target.value)}
          />

          <Button onClick={handleSubmit} 
          className="bg-indigo-500 rounded-xl"
          >
            <SearchIcon />
          </Button>
        </div>
     );
}
 
export default Search;