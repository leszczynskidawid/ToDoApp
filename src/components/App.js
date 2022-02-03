
import './App.css';
import AddTask from './AddTask';
import Task from './Taks';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage'



function App() {

 
const [task, setTask] = useState([{id:0, title:"", dateEnd:'dd-mm-yyyy', piorytet: false , dateFinish:'mm-dd-yyyy',active:false },
{id:1, title:"wymienić oleje w ford", dateEnd:'dd-mm-yyyy', piorytet: false , dateFinish:'mm-dd-yyyy',active:false },
])
const[id, setId] = useState(2)






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
   
 console.log(id)
  const newTask =
   {id:id,
    title,
    dateEnd,
    piorytet ,
    dateFinish:'mm-dd-yyyy',
    active:false 
  }

setId(prevState => prevState + 1)
console.log(id, task)

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
