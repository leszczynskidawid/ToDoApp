
import './App.css';
import AddTask from './AddTask';
import Task from './Taks';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage'




function App() {

  const getData = () => 
  {
    const initilaData = localStorage.getItem("taks")
    if(initilaData !== 0)
    {
     
      return  JSON.parse( localStorage.getItem("taks"))
    }
    else 
    {
    
     return []
    }
  }

const [task, setTask] = useState(getData())
const[id, setId] = useState(0)

useEffect(() => {

  localStorage.setItem("taks" , JSON.stringify(task), [task])
})





const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

const handleSwitchDarkMode  = () => {
  const newTheme = theme === 'light' ? 'dark' : "light"
  setTheme(newTheme)
};
const handleDeleteTask  = (id) =>
{
  const copyTask = [...task];
  const find = copyTask.findIndex(task => task.id=== id)
  copyTask.splice(find ,1)
  setTask(copyTask)
};

 const handleDoneTask  = (id) => {
  const copyTask = [...task];
 
  copyTask.forEach(element => {
    if(element.id === id)
    {
      element.active = true; 
      element.dateFinish =  new Date().getTime();
    }
    else 
    {
      return 
    }
  })
 
  setTask(copyTask)

 };
 const handleAddTask  = (title,dateEnd,piorytet) => {
   

  const newTask =
   {id:id,
    title,
    dateEnd,
    piorytet ,
    dateFinish:'',
    active:false 
  }

setId(prevState => prevState + 1)


  setTask(prevState => [...prevState, newTask])
  return true 
 };

 


  return (
    <div className='App' data-theme= {theme}>
         <AddTask addTask = {handleAddTask} theme = {theme} darkMode = {handleSwitchDarkMode}/>
         <Task task = {task} delete = {handleDeleteTask}  update = {handleDoneTask} />
      
    </div>
   
        

  );
}

export default App;
