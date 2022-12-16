import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../app/store';


interface TravelDataState{
    from:string,
    to:string,
    departure:string
    return?:string
}

const initialState: TravelDataState = {
    from:'',
    to:'',
    departure:'',
    return:'',
}

export const travelDataReducer = createSlice({
    name:'travelData',
    initialState,
    reducers:{
        setDataFrom: (state, action:PayloadAction<string>)=>{
            state.from = action.payload
        },
        setDataTo: (state, action:PayloadAction<string>)=>{
            state.to = action.payload
        },
        setDataDeparture: (state, action:PayloadAction<string>)=>{
            state.departure = action.payload
        },
        setDataReturn: (state, action:PayloadAction<string>)=>{
            state.return = action.payload
        },
        clearDataDeparture: (state)=>{
            state.departure = '';
        },
        clearDataReturn: (state)=>{
            state.return = '';
        }
    },
});

export const {
    setDataFrom,setDataTo,
    setDataDeparture,setDataReturn,
    clearDataDeparture,clearDataReturn} = travelDataReducer.actions

export const selectTravelData = (state:RootState) =>state.travelData;

export default travelDataReducer.reducer;