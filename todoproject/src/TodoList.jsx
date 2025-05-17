import { useState } from 'react'

export default function TodoList(){
    const [input, setInput] = useState([]);
    const [tasks, setTasks] = useState(["laundry", "groceries" ]);
    const [count, setCount] = useState(2)

  function handleTaskbutton(){
    if(input !== ""){
    setTasks([...tasks, input])
    setCount(count + 1)
    setInput("")
    }
  }
   function deleteButton(index){
    const newTasks=tasks.filter((_,i) =>i !== index)
    setTasks(newTasks)
    setCount(count - 1)
    setInput("")
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
    <ul>
    {tasks.map((task, index)=>(
        <li key={index}>{task}  <span><button onClick={()=>deleteButton(index)}>X</button></span></li>
    ))}
    </ul>
    <p> Number of task to be Done: {count}</p>
    </div>
)
}