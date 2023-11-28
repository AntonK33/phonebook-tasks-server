import { createSlice } from "@reduxjs/toolkit";
//import { nanoid } from "nanoid";
import { fetchOll, createTask, deleteTask, toggleCompleted } from "./operations";

// const taskState = [{
//    //task: {name:'a',id:1},
// name:1
// }];

const rejectReqest = (state, action) => {
    //state.isLoading = false;
    state.error = action.payload;
}

const taskState = { 
    items: [],
    all: true,
    active: false,
    completed: false,
};
const tasksSlice = createSlice({
    name:"tasks",
    initialState: taskState,
    extraReducers:{
    // reducers:{
    //     createTask:{
    //         reducer(state,action){
    //             state.push(action.payload);
    //         },
    //         prepare(name){
    //             return{
    //                 payload:{
    //                     name,
    //                     id: nanoid()
    //                 }
    //             }
    //         }
    //     },
    //     deleteTask:{
    //         reducer(state,action){
    //           return state.filter(state => state.id !== action.payload);
    //         }
            
    //         },
    //[fetchUrl.pending]:pendingReqest,
    [fetchOll.fulfilled](state,action) {  
         //state.isLoading = false;
         //state.error = null;
         //state = action.payload; 
         state.items.push(...action.payload);  
    },
    //[addContacts.pending]:pendingReqest,
    [createTask.fulfilled](state, action) {
         //state.isLoading = false;
         //state.error = null;
         state.items.push(action.payload);  
    },
    [createTask.rejected]:rejectReqest,
        
    //[deleteContact.pending]:pendingReqest,
    [deleteTask.fulfilled](state, action) {
        //return state.filter(contact => contact.id !== action.payload);
         //state.isLoading = false;
        // state.error = null;
        const index = state.items.findIndex((task) => task.id === action.payload.id)
        state.items.splice(index,1)
    },
    [deleteTask.rejected]:rejectReqest,
       
        
        [toggleCompleted.fulfilled](state, action) {
            // for (const task of state) {
            //   if (task.id === action.payload) {
            //     task.completed = !task.completed;
                
            //   }
            // }
            const index = state.items.findIndex(
                task => task.id === action.payload.id
              );
              state.items.splice(index, 1, action.payload);
          },
          [toggleCompleted.rejected]:rejectReqest
        }})
//export const {createTask, deleteTask} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;