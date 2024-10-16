import { useEffect, useState } from "react"
import User from "./User";
export default function Users(){

    const[users,setusers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setusers(data))
    },[])
    return(
        <div>
            <p>Users:{users.length}</p>
            {
                users.map(user =><User user={user}></User>)
            }
        </div>
    )
}