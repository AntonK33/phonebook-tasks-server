import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//axios.defaults.baseURL = "https://64456a09914c816083ce416d.mockapi.io/contacts";

export const fetchOll = createAsyncThunk("tasks/fetchOll", async (_, thunkAPI) => {
        try {
            const response = await axios.get("https://64456a09914c816083ce416d.mockapi.io/contacts/tasks");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
     });

export const createTask = createAsyncThunk("tasks/createTask", async ({ taskValue }, thunkAPI) => {
    try {
        const response = await axios.post("https://64456a09914c816083ce416d.mockapi.io/contacts/tasks", { name:taskValue });
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (contactId, thunkAPI) => {
      try {
        const response =  await axios.delete(`https://64456a09914c816083ce416d.mockapi.io/contacts/tasks/${contactId}`);
        return response.data;
    }
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
// export const toggleCompleted = createAsyncThunk("tasks/toggleCompleted", async (_, thunkAPI) => {
//     try {
//         const response = await axios.get("https://64456a09914c816083ce416d.mockapi.io/contacts/tasks");
//         return response.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
//  });
 export const toggleCompleted = createAsyncThunk(
    "tasks/toggleCompleted",
    async (tasks, thunkAPI) => {
      try {
        const response = await axios.put(`https://64456a09914c816083ce416d.mockapi.io/contacts/tasks/${tasks.id}`, {
          completed: !tasks.completed,
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );