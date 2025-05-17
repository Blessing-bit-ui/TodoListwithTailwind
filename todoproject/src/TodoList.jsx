import { useState } from 'react'

export default function TodoList(){
    const [input, setInput] = useState([]);
    const [tasks, setTasks] = useState(["laundry", "groceries" ]);
     
return(
    <h1>{tasks}</h1>
)
}