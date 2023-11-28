
//import {combineReducers} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE, 
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { filterReducer } from "./contacts/filterSlise";
import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/slice";
import { tasksReducer } from "./tasks/tasksSlice";


const authPersistConfig = {
  //key:('root'),

  key:('auth'),
  storage,
 //whitelist:['token']
 
};
// const tasksPersistConfig = {
//   key:('tasks'),
//   storage,
//   //whitelist:['tasks']
// };

    export const store = configureStore({
        reducer:{
        auth: persistReducer(authPersistConfig, authReducer),
        //tasks: persistReducer(tasksPersistConfig, tasksReducer),
        contacts: contactsReducer,
        filter: filterReducer,
        tasks:tasksReducer
        
        
    },
    
        middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ],
        devTools: process.env.NODE_ENV === 'development',
        });
        
  

export const persistor = persistStore(store);


// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer)



// export const store = configureStore({
//     reducer: persistedReducer,
     
//      middleware(getDefaultMiddleware) {
    
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });

//   }
// });





// export const persistor = persistStore(store);

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

//const enhancer = devToolsEnhancer();

// export const store = configureStore({
//     reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
// }});