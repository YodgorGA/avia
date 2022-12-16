import React,{FC} from 'react'
import {setDataDeparture, setDataReturn,selectTravelData} from '../feachures/travelDataReducers';
import {
setIsDepartureDatePicked,
setHelperText,
setIsCalendarOpen,
setIsReturnDatePicked,
setCurrentDatePicker,
} from '../feachures/appStateReducers';
import { testDate } from '../feachures/dateFeachures';
import {useAppDispatch,useAppSelector} from '../app/hooks';
import {selectAppState} from '../feachures/appStateReducers'
import { selectDateState } from '../feachures/dateReducers';

interface ButtonTimeProps{
    day:(string|number),
    state:string
    monthNumber:number
}
const DayItem:FC<ButtonTimeProps> = ({day,state,monthNumber})=> {
  const dispatch = useAppDispatch();
  const travelSelector = useAppSelector(selectTravelData);
  const appSelector = useAppSelector(selectAppState);
  const dateSelector = useAppSelector(selectDateState);
  const dateYear = new Date().getFullYear();

  const activeDayClickHandler = (e:React.MouseEvent<HTMLDivElement>) =>{
    const child = e.currentTarget.childNodes[0].textContent;
    
    if(appSelector.currentDatePicker==='departure'){
      dispatch(setDataDeparture(new Date(dateYear,monthNumber,Number(child)).toLocaleDateString()));
      dispatch(setCurrentDatePicker('return'));
      dispatch(setIsDepartureDatePicked(true));
      if(appSelector.isReturnDatePicked === true){
        dispatch(setIsCalendarOpen(false));
      }
      else{
        dispatch(setHelperText('return'));
      }
    }
    if(appSelector.currentDatePicker==='return'){
      dispatch(setDataReturn(new Date(dateYear,monthNumber,Number(child)).toLocaleDateString()));
      dispatch(setIsCalendarOpen(false));
      dispatch(setIsReturnDatePicked(true));
    }

  }

  const disabledDayClickHandler = ()=>{
    testDate()
  }
  if(state === 'disabled'){
    return (
      <div className='day_item__disabled' onMouseDown={disabledDayClickHandler}>
        <p className='day_text__disabled'>{day}</p>
      </div>
    )
  }
  else{
    return (
      <div className='day_item' onMouseDown={activeDayClickHandler}>
          <p className='day_text'>{day}</p>
      </div>
    )
  }

}

export default DayItem
export {}