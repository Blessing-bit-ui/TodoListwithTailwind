import { useState } from 'react'

export default function TodoList(){
    const [input, setInput] = useState([]);
    const [tasks, setTasks] = useState(["laundry", "groceries" ]);
    const [count, setCount] = useState(2)
    const[complete, setComplete] = useState(0)
    const [completeIndexes, setCompleteIndexes] = useState([])

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
   function handleComplete(index){
    if(!completeIndexes.includes(index)){
        setCount(count - 1)
        setComplete(complete + 1)
        setCompleteIndexes([...completeIndexes, index])
        
    }
}
     
return (
  <div>
    <h1 class="text-red-200 ">To-Do List</h1>
    <input
      value={input}
      placeholder="Enter task"
      onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={handleTaskbutton}>Add Task</button>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}{" "}
          <span>
            <button onClick={() => deleteButton(index)}>X</button>
          </span>
          <span>
            <button onClick={handleComplete}>✅</button>
          </span>
        </li>
      ))}
    </ul>
    <p> Number of task to be Done: {count}</p>
    <p> Number of Complete : {complete}</p>
  </div>
);
}