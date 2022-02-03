import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Task.css"


const ListElement  = (props) => {

  const {id , title , dateEnd, active, piorytet, dateFinish} = props.task;
  const style = {
    color: "red", 
  }


  if(active)
  {
    const finish = new Date(dateFinish).toLocaleString()
     return (
        <ListItem   
        secondaryAction={
          <>
         

          <IconButton onClick = {() => props.delete(id)}>
              <DeleteIcon style={{color: 'red', fontSize:"30px"}}/>
          </IconButton>
          </>
        }>
        <p><strong>{title}</strong>zrobić do({dateEnd}) <em>Wykonano: {finish}</em></p>
        
      </ListItem>
     )
      }
      else
      {
        return (

          <ListItem   
          secondaryAction={
            <>
            <IconButton onClick = {() =>props.update(id)}>
             
              <DoneIcon style={{color: 'green', fontSize:"30px"}} />
            </IconButton>
  
            <IconButton onClick = {() => props.delete(id)}>
                <DeleteIcon style={{color: 'red', fontSize:"30px"}}/>
            </IconButton>
            </>
          }>
            <p><strong  style = {piorytet ? style : null } >{ title} </strong> {dateEnd}</p>
          
        </ListItem>
        )
      }
};
export default ListElement; 
