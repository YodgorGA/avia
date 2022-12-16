import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface AviaInfo{
    activeButtonNumber:number,
    departureTime:string,
    arrivalTime:string,
}

const initialState: AviaInfo = {

    activeButtonNumber:1,
    departureTime:'09:20',
    arrivalTime:'11:15'
}

export const aviaInfoReducer = createSlice({
    name:'aviaInfoState',
    initialState,
    reducers:{
        setActiveButtonNumber: (state,action:PayloadAction<number>)=>{
            state.activeButtonNumber = action.payload
        },
        setDepartureTime:(state,action:PayloadAction<string>)=>{
            state.departureTime = action.payload
        },
        setArrivalTime:(state,action:PayloadAction<string>)=>{
            state.arrivalTime = action.payload
        }
    },
});


export const {
    setActiveButtonNumber,
    setDepartureTime,setArrivalTime
} = aviaInfoReducer.actions

export const selectAviaInfo = (state:RootState) =>state.aviaInfoState;

export default aviaInfoReducer.reducer;