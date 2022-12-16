import React, {FC}from 'react'
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {setIsCalendarOpen,setIsDepartureDatePicked,setIsReturnDatePicked,setHelperText,selectAppState,setCurrentDatePicker} from '../feachures/appStateReducers';
import {clearDataDeparture,clearDataReturn, selectTravelData} from '../feachures/travelDataReducers';
interface InputCalendarProps{
    label:string,
    value?:string
    fieldName:string,
}
const InputCalendar:FC<InputCalendarProps> = ({label,value,fieldName}) => {
  const dispatch = useAppDispatch();
  const travelSelector = useAppSelector(selectTravelData);
  const appSelector = useAppSelector(selectAppState);

  const inputClickHandler = (e:React.MouseEvent) =>{
    dispatch(setCurrentDatePicker(fieldName));
    dispatch(setIsCalendarOpen(true));
    if(appSelector.currentDatePicker==='departure'){
      dispatch(setHelperText(fieldName));
    }
    if(appSelector.currentDatePicker==='return'){
      dispatch(setHelperText(fieldName));
    }
  }
  const crossClickHandler = (e:React.MouseEvent) =>{
    if(fieldName ==='departure' ){
      dispatch(clearDataDeparture());
      dispatch(setIsDepartureDatePicked(false));
      if(appSelector.currentDatePicker !== 'departure'){
        dispatch(setCurrentDatePicker('departure'));
        dispatch(setHelperText('departure'));
      }
    }
    if(fieldName ==='return' ){
      dispatch(clearDataReturn());
      dispatch(setIsReturnDatePicked(false));
      if(appSelector.currentDatePicker !== 'return'){
        dispatch(setCurrentDatePicker('return'));
      }
    }
    dispatch(setHelperText(fieldName));
  }
  return (
  <div className={'input_container'}>
      <label className={'input_label'}>{label}</label>
      <input
      type={'button'}
      className={"input input__calendar"}  
      value={value!== ''?value:''} 
      onClick={inputClickHandler}
      />
      <div 
      className={(value === ''?'icon_calendar':'icon_cross')}
      onClick={crossClickHandler}
      ></div>
  </div>
  )
}

export default InputCalendar