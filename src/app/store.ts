import { dateStateReducer } from './../feachures/dateReducers';
import { configureStore } from "@reduxjs/toolkit";
import { appStateReducer } from './../feachures/appStateReducers';
import { travelDataReducer } from "../feachures/travelDataReducers";
import { aviaInfoReducer } from '../feachures/aviaInfoRducers';

export const store = configureStore({
    reducer:{
        travelData:travelDataReducer.reducer,
        appState:appStateReducer.reducer,
        dateState:dateStateReducer.reducer,
        aviaInfoState:aviaInfoReducer.reducer,
    },
    middleware: (curryGetDefaultMiddleware) =>curryGetDefaultMiddleware(
        {
            serializableCheck:false
        }
    )
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
