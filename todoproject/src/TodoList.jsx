import { useState } from 'react'

export default function TodoList(){
    const [input, setInput] = useState([]);
    const [tasks, setTasks] = useState(["laundry", "groceries" ]);
    const [count, setCount] = useState(2)
    const[complete, setComplete] = useState(0)
    const [incomplete, setIncomplete] = useState(0)
    const [completeIndexes, setCompleteIndexes] = useState([])
    const [incompleteIndexes, setInCompleteIndexes] = useState([])
   const [tasksIndexes, setTaskIndexes] = useState([])
   const [errors, setErrors] =useState("")
    function handleTaskbutton(){
    if(input !== ""){
    setTasks([...tasks, input])
    setCount(count + 1)
    setInput("")
    }
    if(input ==""){
    setErrors("Tasks is required")
    return;
    }
    setErrors("")
  }
   function deleteButton(index){
    const newTasks=tasks.filter((_,i) =>i !== index)
    setTasks(newTasks)
    setCount(count - 1)
    setInput("")
   }
   function handleComplete(index){
    if(!completeIndexes.includes(index)){
        setComplete(complete + 1)
        setCount(count - 1)
        setCompleteIndexes([...completeIndexes, index])
        setInCompleteIndexes(incompleteIndexes.filter((i)=> i!==(index)))
        setIncomplete(incompleteIndexes.includes(index) ? incomplete - 1 : incomplete)
    }
}
function handleIncomplete(index){
    if(!incompleteIndexes.includes(index)){
    setIncomplete(incomplete + 1)
    setInCompleteIndexes([...incompleteIndexes, index])
    setCompleteIndexes(completeIndexes.filter((i)=> i!==(index)))
    setComplete(completeIndexes.includes(index)? complete - 1 : complete)     
     setCount(tasksIndexes.includes(index) ? count + 1 : count)   
     setTaskIndexes([...tasksIndexes, index]) 
}
}
     
return (
  <div class=" w-100 rounded-lg shadow-md p-6">
    <h1 class="text-center font-bold text-[30px]">To-Do List</h1>
    <input
      value={input}
      placeholder="Enter task"
      onChange={(e) => setInput(e.target.value)}
      class=" p-1 border-2 rounded-md w-[260px] mr-4"
    />
    <button onClick={handleTaskbutton} class="bg-black text-white rounded-md p-1">Add Task</button>
    {errors && <p>{errors}</p>}
    <ul>
      {tasks.map((task, index) => (
        <li key={index} class=" w-66 shadow-md p-4">
          {task}{" "}
          <span>
            <button onClick={() => deleteButton(index)}>X</button>
          </span>
          <span>
            <button onClick={() => handleComplete(index)}>✅</button>
          </span>
          <span>
            <button onClick={() => handleIncomplete(index)}>⭕</button>
          </span>
        </li>
      ))}
    </ul>
    <div class="p-6 ">
    <p> Number of task to be Done: {count}</p>
    <p> Number of Complete Tasks : {complete}</p>
    <p>Number of Incompleted Tasks : {incomplete}</p>
    </div>
  </div>
);
}