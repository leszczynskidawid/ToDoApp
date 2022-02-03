

import List from '@mui/material/List';
import ListElement from './ListElement';
import "./Task.css"
 
 const Task  = (props) => {


  const active = props.task.filter(task =>  task.active === false)
  const done = props.task.filter(task =>  task.active === true)
 

    const tasksActive = active.map( task =><ListElement  key = {task.id} 
        task = {task}
        delete = {props.delete} 
        update = {props.update}/>)
    const tasksDone = done.map( task =><ListElement  key = {task.id} 
            task = {task}
            delete = {props.delete} 
            update = {props.update}/>)
        

     
    
return (
    <>
<div className='Listelement' >
     <List >
         <h1>Twoje zadania</h1>
        {tasksActive}
    </List>
    </div>
    <div className='ListElementDone'>
        <h1>Wykonane zadania</h1>
    <List>
    {tasksDone}
    </List>
</div>  

</>
)

 };
 export default Task;