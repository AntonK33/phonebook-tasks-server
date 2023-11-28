import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "redux/tasks/operations";

export const InputFormTasks =()=>{
    const[taskValue,setTaskValue] = useState('');

    const dispatch = useDispatch();

    const inputChange = (e) => {
       const inpVel = e.target.value;
       setTaskValue(inpVel)
    }
    const submitForm = e =>{
        e.preventDefault();
        dispatch(createTask({taskValue}));
        setTaskValue('');
    }
    return(
        <form onSubmit={submitForm}>
            <label>
                <span>New task</span>
                <input value={taskValue} name='task' onChange={inputChange}/>
                <button type="submit">Create task</button>
            </label>
        </form>
    )
}
