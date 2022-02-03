import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';

import DateTimePicker from 'react-datetime-picker'
import { TextField, Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import "./App.css"
import "./AddTask.css"

const AddTask  = (props) => {


const [valueDate, setValueDate] = useState(new Date())
const [inputValue, setValue] = useState(""); 
const [checkboxActive, setChecboxActive] = useState(false)
const [error , setError] = useState(false)



  


const handleChangeInputValue  = (e) => {
const type = e.target.type;
 if(type === "text")   
 setValue(e.target.value)
else if(type === "checkbox")
setChecboxActive(e.target.checked)

};

const validationResultAddTask  = () => {
     let succes = false;
    let input = false;
    let  date= false;
 


     if(inputValue.length > 1 && inputValue.length<25)
     {
        input = true; 
     }
   
     if(input)
     {
         succes= true;
     }
     


    return {succes, 
    input}
};


const handleAddTask  = (e) => {

    const validationResult = validationResultAddTask()


    if(validationResult.succes)
    { 
      
        
        setError(false)
        props.addTask(inputValue,valueDate.toLocaleString(),checkboxActive)
      ClearAddFormTask()
    }
    else 
    {
        setError(true)
        console.log("nipowodzeni") 
         ClearAddFormTask()
    }

  

     
};
console.log(props.theme)

const ClearAddFormTask=()=>
{   
setValue(" "); 
setChecboxActive(false)
setValueDate(new Date())

}

    return(
  
        <FormGroup className = "formGroup">
        <TextField  onChange = {handleChangeInputValue} value= {inputValue}  id="outlined-basic" 
        variant="outlined" error ={error} helperText = {error ? 'wartość inputa nie moze być pusta lub przekraczać 20 znaków' : null}/>
        <FormControlLabel control={<Checkbox  onChange={handleChangeInputValue} checked ={checkboxActive}/>} label="Preference" />
        <DateTimePicker   error ={error} value = {valueDate} minDate={valueDate}
        onChange={(newValue) => setValueDate(newValue)}/>
        <div className='containerButton'>



     

         <Button  onClick = {handleAddTask} className='button' >Add Task</Button>
         <IconButton onClick={props.darkMode} className='iconButton' sx={{ ml: 1 }} >
        
         switch to {props.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
       </IconButton>
       </div>
        </FormGroup>
      
    
    )
     
};
export default AddTask;