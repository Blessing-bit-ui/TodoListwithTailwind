import { useState } from 'react'

export default function TodoList(){
    const [input, setInput] = useState([]);
    const [tasks, setTasks] = useState(["laundry", "groceries", " picking kid from school" ]);
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
  <div class=" justify-center mt-10 mr-auto ml-auto w-10/12 rounded-lg shadow-md p-6 md:w-1/2 bg-white">
    <h1 class="text-center font-bold text-[30px]">To-Do List</h1>
    <input
      value={input}
      placeholder="Enter task"
      onChange={(e) => setInput(e.target.value)}
      class=" p-1 border-2 rounded-md w-3/4 mr-4"
    />
    <button onClick={handleTaskbutton} class="bg-black text-white rounded-md p-1 hover:text-black hover:bg-white">Add Task</button>
    {errors && <p>{errors}</p>}
   <div class="mt-6">
    <ul>
      {tasks.map((task, index) => (
        <li key={index} class=" shadow-md p-2">
          {task}{" "}
            <span class="flex justify-end gap-1">
            <button onClick={() => deleteButton(index)} class="text-[30px] transition-transform duration-300 hover:rotate-[15deg]">X</button>
            <button onClick={() => handleComplete(index)} class="text-[20px] transition-transform duration-300 hover:rotate-[20deg]">✅</button>
            <button onClick={() => handleIncomplete(index)} class="text-[20px]">⭕</button>
          </span>
        </li>
      ))}
    </ul>
    </div>
    <div class="p-3">
    <p class="text-left font-bold"> Number of task to be Done: {count}</p>
    <p class="text-green-900 font-bold"> Number of Complete Tasks : {complete}</p>
    <p class=" text-red-600 font-bold">Number of Incompleted Tasks : {incomplete}</p>
    </div>
  </div>
);
}