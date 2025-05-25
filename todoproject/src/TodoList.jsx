import { useState } from 'react'

export default function TodoList(){
    const [input, setInput] = useState([]);
    const [tasks, setTasks] = useState(["laundry", "groceries"," picking kid from school" ]);
    const [count, setCount] = useState(3)
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
      setTasks(tasks)
      setCount(count)
    setErrors("Tasks is required")
    return;
   } 
  }
   function deleteButton(index){
    const newTasks=tasks.filter((_,i) =>i !== index)
    setTasks(newTasks)
    setComplete(completeIndexes.includes(index) ? complete - 1 : complete);
    setIncomplete(incompleteIndexes.includes(index) ? incomplete - 1 : incomplete)
    setCount( prevcount => prevcount === 0 ? prevcount : prevcount - 1 );
    setInput("")
    
   }
   function handleComplete(index){
    if(!completeIndexes.includes(index)){
        setComplete(prevcomplete => prevcomplete < 0 ? prevcomplete: prevcomplete + 1)
        setCount( prevcount => prevcount === 0 ? prevcount : prevcount - 1 )
        setCompleteIndexes([...completeIndexes, index])
        setInCompleteIndexes(incompleteIndexes.filter((i)=> i!==(index)))
        setIncomplete(incompleteIndexes.includes(index) ? incomplete - 1 : incomplete)
        setTaskIndexes([...tasksIndexes, index]);
    }
}
function handleIncomplete(index){
    if(!incompleteIndexes.includes(index)){
    setIncomplete(previncomplete => previncomplete < 0? previncomplete : previncomplete  + 1)
    setInCompleteIndexes([...incompleteIndexes, index])
    setCompleteIndexes(completeIndexes.filter((i)=> i!==(index)))
    setComplete(completeIndexes.includes(index)? complete - 1 : complete)     
    setCount(tasksIndexes.includes(index) ? count + 1 : count)   
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
    {errors && <p class="text-red-300 text-[15px] italic">{errors}</p>}
   <div class="mt-6">
    <ul>
      {tasks.map((task, index) => (
        <li key={index} class=" shadow-md p-2">
          {task}
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