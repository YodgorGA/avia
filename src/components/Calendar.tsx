import React,{FC} from 'react'
import ButtonMonth from './ButtonMonth';
import CalendarMonth from './CalendarMonth';
import {useAppSelector,useAppDispatch} from '../app/hooks';
import { selectAppState,setIsCalendarOpen } from '../feachures/appStateReducers';
import {clearDataReturn} from '../feachures/travelDataReducers';
import {getCurrentMonthTitle, getNextMonthTitle, getNextMonthDaysArrayWithFillers, getCurrentMonthDaysArrayWithFillers, getNextMonthDaysState, getCurrentMonthDaysState, getNextMonthToCompaireDate, getCurrentMonthToCompaireDate } from '../feachures/dateFeachures';
import { selectDateState } from '../feachures/dateReducers';
interface CalendarProps{
  isVisible:boolean
}
const Calendar:FC<CalendarProps> = ({isVisible}) => {
  const appSelector = useAppSelector(selectAppState);
  const dispatch = useAppDispatch();
  const dateSelector = useAppSelector(selectDateState)

  const returnButtonClickHandler = () =>{
    if(isVisible === true){
      dispatch(setIsCalendarOpen(false));
      dispatch(clearDataReturn());
    }
  }
  if(appSelector.isCalendarOpen === false){
    return(<div></div>)
  }
  return (
    <div className='calendar_dropdown'>
        <div className="calendar_wrapper">
            <div className="calendar_header">
                <div className="calendar_helper">
                  <p>{appSelector.helperText}</p>
                </div>
                <div className="calendar_return">
                    <button 
                    disabled={!appSelector.isDepartureDatePicked} 
                    className={
                      (appSelector.isDepartureDatePicked !==true?`calendar_button__disabled`:`calendar_button`)
                    }
                    onClick={returnButtonClickHandler}
                    >Обратный билет не нужен
                    </button>
                </div>
            </div>
            <div className="calendar_body">
              <div className="calendar_buttonsContainer">
                <ButtonMonth position='Left'/>
                <ButtonMonth position='Right'/>
              </div>
              <CalendarMonth 
              compairingMonth={getCurrentMonthToCompaireDate(dateSelector.monthBias)} 
              monthDays={getCurrentMonthDaysArrayWithFillers(dateSelector.monthBias)} 
              month={getCurrentMonthTitle(dateSelector.monthBias)}
              monthNumber={new Date().getMonth()+dateSelector.monthBias}
              />
              <CalendarMonth 
               
              monthDays={getNextMonthDaysArrayWithFillers(dateSelector.monthBias)} 
              month={getNextMonthTitle(dateSelector.monthBias)}
              monthNumber={new Date().getMonth()+dateSelector.monthBias+1}
              />
            </div>
        </div>
    </div>
  )
}

export default Calendar

export {}