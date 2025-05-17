import { useState } from 'react'

export default function TodoList(){
    const [input, setInput] = useState([]);
    const [tasks, setTasks] = useState(["laundry", "groceries" ]);
    const [count, setCount] = useState(0)

  function handleTaskbutton(){
    setTasks( [...tasks, input])
  }
     
return(
<div>
    <h1 class="text-red-200 ">To-Do List</h1>
    <input 
    value={input}
    placeholder="Enter task"
    onChange={(e)=> setInput(e.target.value)}
    />
    <button onClick={handleTaskbutton}>Add Task</button>
    <h1>{tasks}</h1>
    </div>
)
}