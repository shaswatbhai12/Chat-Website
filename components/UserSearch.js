"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function UserChat() {
    const [query, setQuery] = useState("");
    const [users, setUsers ] = useState([]);

    const router = useRouter();

    const searchUsers = async(value) => {
        setQuery(value)

        if(!value){
            setUsers([]);
            return
        }

        const res = await fetch(
            `/api/users?search=${value}`
        );

        const data = await res.json();

        setUsers(data.users)
    };

    return(
        // <div className="w-96">
        //     <input value={query} className="border p-3 rounded w-full" placeholder="Search Users ..." onChange={(e)=>searchUsers(e.target.value)}/>

        //     <div className="mt-3">
        //         {
        //             users.map((user)=>(
        //                 <div className="p-3 border cursor-pointer hover:bg-gray-100" key={user.id} onClick={()=>{router.push(`/chat/${user.id}`)}}>{user.name}</div>
        //             ))
                
        //     </div>
        // </div>

        <h1 className="text-center ">Under Development</h1>
    )
}