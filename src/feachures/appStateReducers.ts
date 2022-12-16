import {createSlice,PayloadAction,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../app/store';
import { IArrObj } from './../app/interfaces';

interface AppState{
    helperText:string
    isCalendarOpen:boolean
    isDepartureDatePicked:boolean
    isReturnDatePicked:boolean
    currentDatePicker:string
    isFromHelperOpen:boolean,
    isToHelperOpen:boolean,
    fromHelperData:IArrObj,
    toHelperData:IArrObj,
    fromHelperCity:string,
    toHelperCity:string,
    fromQuery:string,
    toQuery:string,
}

const initialState: AppState = {
    helperText:'Выберите дату отправления',
    isCalendarOpen:false,
    isDepartureDatePicked:false,
    isReturnDatePicked:false,
    currentDatePicker:'',
    isFromHelperOpen:false,
    isToHelperOpen:false,
    fromHelperData:[],
    toHelperData:[],
    fromHelperCity:'',
    toHelperCity:'',
    fromQuery:'',
    toQuery:''
    
}
export const fetchFromHelperData = createAsyncThunk(
    'appState/fetchFromHelperDataStatus',
    async (query:string)=>{
        const responce = await axios.get('https://autocomplete.travelpayouts.com/places2?locale=ru&types[]=airport&term='+query)
        return responce.data
    }
)
export const fetchToHelperData = createAsyncThunk(
    'appState/fetchToHelperDataStatus',
    async (query:string)=>{
        const responce = await axios.get('https://autocomplete.travelpayouts.com/places2?locale=ru&types[]=airport&term='+query)
        return responce.data
    }
)
export const appStateReducer = createSlice({
    name:'appState',
    initialState,
    reducers:{
        setIsDepartureDatePicked: (state,action:PayloadAction<boolean>)=>{
            state.isDepartureDatePicked = action.payload
        },
        setIsReturnDatePicked: (state,action:PayloadAction<boolean>)=>{
            state.isReturnDatePicked = action.payload
        },
        //Я понимаю что можно сделать toggle, но пока я хочу передавать туда значение явно, для большей ясности
        setIsCalendarOpen: (state,action:PayloadAction<boolean>)=>{
            state.isCalendarOpen = action.payload
        },
        setHelperText: (state,action:PayloadAction<string>)=>{
            switch(action.payload){
                case 'departure':
                    state.helperText = 'Выберите дату отправления';
                    break;
                case 'return':
                    state.helperText = 'Выберите дату возвращения';
                    break;
                default:
                    state.helperText = 'Выберите дату отправления';
                    break;
            }
        },
        setCurrentDatePicker:(state,action:PayloadAction<string>)=>{
            state.currentDatePicker = action.payload
        },
        setIsFromHelperOpen: (state,action:PayloadAction<boolean>)=>{
            state.isFromHelperOpen = action.payload
        },
        setIsToHelperOpen: (state,action:PayloadAction<boolean>)=>{
            state.isToHelperOpen = action.payload
        },
        setFromQuery:(state,action:PayloadAction<string>)=>{
            state.fromQuery = action.payload;
        },
        setToQuery:(state,action:PayloadAction<string>)=>{
            state.toQuery = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFromHelperData.fulfilled,(state,action:PayloadAction<IArrObj>)=>{
            state.fromHelperData = action.payload;
            if (action.payload[0].city_name !== undefined){
                state.fromHelperCity = action.payload[0].city_name
            }
        })
        builder.addCase(fetchToHelperData.fulfilled,(state,action:PayloadAction<IArrObj>)=>{
            state.toHelperData = action.payload;
            if (action.payload[0].city_name !== undefined){
                state.toHelperCity = action.payload[0].city_name
            }
        })
    },
});


export const {
    setIsDepartureDatePicked,
    setHelperText,
    setIsCalendarOpen,
    setCurrentDatePicker,setIsReturnDatePicked,
    setIsToHelperOpen,setIsFromHelperOpen,
    setFromQuery,setToQuery
} = appStateReducer.actions

export const selectAppState = (state:RootState) =>state.appState;

export default appStateReducer.reducer;