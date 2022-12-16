import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface DateState{
    currentDate:Date,
    
    
    monthBias:number
}

const initialState: DateState = {
    currentDate: new Date(),
    
    
    monthBias:0
}

export const dateStateReducer = createSlice({
    name:'dateState',
    initialState,
    reducers:{
        increaseMonthBias:(state)=>{
            state.monthBias = state.monthBias +1
        },
        decreaseMonthBias:(state)=>{
            state.monthBias = state.monthBias -1
        }
        
    },

});

export const {increaseMonthBias,decreaseMonthBias} = dateStateReducer.actions

export const selectDateState = (state:RootState) =>state.dateState;

export default dateStateReducer.reducer;