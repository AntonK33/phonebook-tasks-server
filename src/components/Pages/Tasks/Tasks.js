
import { useDispatch, useSelector } from "react-redux";
import { InputFormTasks } from "./InputFormTasks/InputFormTasks";
//import { getTasks } from "redux/tasks/selektors";
 //import  css  from "./Tasks.module.css";
//import { deleteTask } from "redux/tasks/operations";
//import { useState } from "react";
import { useEffect, useState } from "react";
import { fetchOll } from "redux/tasks/operations";
import { TaskList } from "./TaskList/TaskList";
//import { TaskList } from "./TaskList";


export const Tasks = () => {
// const [tas, setTas]= useState([]);
const [buttonAll, setButtonAll] = useState(true);
const [buttonActive, setButtonActive] = useState(false);
const [buttonCompleted, setButtonCompleted] = useState(false);
const [selectedValue, setSelectedValue] = useState("");
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchOll());
  }, [dispatch]);


// const changeButtonAll = () =>{
//   setButtonAll(!buttonAll);
// }
// console.log(buttonAll);
// const changeButtonActive = () =>{
//   setButtonActive(!buttonActive); 
// }
// console.log(buttonActive);
// const changeButtonCompleted = () =>{
//   setButtonCompleted(!buttonCompleted);
// }
// console.log(buttonCompleted);

const buttonHandler = (event) => {
  const name = event.target.name

  switch (name) {
    case "buttonAll":
        setButtonAll(!buttonAll);
        setSelectedValue("");
        setButtonActive(false);
        setButtonCompleted(false)
        break;
    case "buttonActive":
      setButtonActive(!buttonActive);
      setSelectedValue(false);
      setButtonAll(false);
      setButtonCompleted(false);
        break;
        case "buttonCompleted":
          setButtonCompleted(!buttonCompleted);
          setSelectedValue(true);
          setButtonActive(false);
          setButtonAll(false);
        break;
  
    default: return;
  }
}
console.log(buttonAll);
console.log(buttonActive);
console.log(buttonCompleted);
console.log(selectedValue);
//   const taskName = useSelector(getTasks);
// console.log(taskName);
   
   
return(
    <>
    {/* <div>{taskName}</div> */}
    <div>
      <button name="buttonAll" onClick={buttonHandler}>All</button>
      <button name="buttonActive" onClick={buttonHandler}>Active</button>
      <button name="buttonCompleted" onClick={buttonHandler}>Completed</button>
    </div>
    <InputFormTasks/>
    <ul>
      <TaskList selectedValue={selectedValue}/>
    {/* {taskName.map(val => {
        // return <TaskList key={val.id} val={val}/>;
         return ( 
            
             <li key={val.id} >
            <div className={css.task_box}>
            <input type="checkbox" className={css.checkbox}/>
            <p className={css.task_p}>{val.name}</p>
            <button onClick={()=>dispatch(deleteTask(val.id))}>Delete task</button>
            </div>
            </li>   
            
           )
    })} */}
    </ul> 
    </>
)
};