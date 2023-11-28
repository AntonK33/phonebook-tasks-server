import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "redux/tasks/operations";
import { getChengeActive, getChengeCompleted, getTasks } from "redux/tasks/selektors";
import css from "../Tasks.module.css"
export const TaskList = (selectedValue)=>{

    const dispatch = useDispatch();
    const taskName = useSelector(getTasks);
    
    const buttonChangeActive = useSelector(getChengeActive);
    const buttonChangeCompleted = useSelector(getChengeCompleted);
  

let filteredTask = [];

let selectedValueObjectValue = Object.values(selectedValue);

let findeIndexValue = selectedValueObjectValue[0];


function filteredValue () {

if ( findeIndexValue === true){
    filteredTask = taskName.filter(task => task.completed);
} else if (findeIndexValue === false){
   filteredTask = taskName.filter(task => !task.completed);
}else{
   filteredTask = taskName;
}

 

};
filteredValue();

// const filteredTask = taskName.filter(task => ({selectedValue}));
    return(
        <>
         {
         
         filteredTask.map(val => {
            // return <TaskList key={val.id} val={val}/>;
             return ( 
                
                 <li key={val.id} >
                <div className={css.task_box}>
                <input 
                type="checkbox" 
                className={css.checkbox}
                checked={val.completed}
                onChange={()=>dispatch(toggleCompleted(val))}
                />
                <p className={css.task_p}>{val.name}</p>
                <button onClick={()=>dispatch(deleteTask(val.id))}>Delete task</button>
                </div>
                </li>   
                
               )
        })}
        </>
       
    )
}