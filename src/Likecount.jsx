import { useState } from "react"

export default function Likecount(){
    const[count,setcount] = useState(0);

    const handleAdd = () => {
        const newcount = count + 1
        setcount(newcount)
    }

    const handleReduce = () => {
        const newcount = count -1
        setcount(newcount)
    }
    return(
        <div>
            <h2>LikeCount:{count}</h2>
            <button onClick={handleAdd}>Increase Likes</button>
            <button onClick={handleReduce}>Decrease Likes</button>
        </div>
    )
}