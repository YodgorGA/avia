import React,{FC, useState}from 'react';
import DayItem from './DayItem';
import { useAppSelector } from '../app/hooks';
import { selectAppState } from '../feachures/appStateReducers';
import { selectDateState } from '../feachures/dateReducers';

interface CalendarMonthProps{
  month:string;
  monthDays:(string|number)[];
  compairingMonth?:Date
  monthNumber:number
}
const CalendarMonth:FC<CalendarMonthProps> = ({monthNumber,compairingMonth,month,monthDays,...CalendarMonthProps}) => {
  const dateSelector = useAppSelector(selectDateState);
  return (
    <div className='calendarMonth_wrapper'>
      <div className="calendarMonth_content">
        <div className="calendarMonth_header">
              <div className="calendarMonth_month">
                  <p>{month}</p>
              </div>
          </div>
          <div className="calendarMonth_body">
              <div className="calendarMonth_weekDays">
                  <div className="calendarMonth_weekDay">
                    <p>ПН</p>
                  </div>
                  <div className="calendarMonth_weekDay">
                    <p>ВТ</p>
                  </div>
                  <div className="calendarMonth_weekDay">
                    <p>СР</p>
                  </div>
                  <div className="calendarMonth_weekDay">
                    <p>ЧТ</p>
                  </div>
                  <div className="calendarMonth_weekDay">
                    <p>ПТ</p>
                  </div>
                  <div className="calendarMonth_weekDay">
                    <p>СБ</p>
                  </div>
                  <div className="calendarMonth_weekDay">
                    <p>ВС</p>
                  </div>
              </div>
              <div className="calendarMonth_monthDays day_items">
                  {monthDays.map((day)=>{
                    if(monthNumber === dateSelector.currentDate.getMonth()){
                      if(new Date(new Date().getFullYear(),new Date().getMonth(),Number(day)+1) < new Date()){
                        return <DayItem monthNumber={monthNumber} state='disabled' key={Math.random()} day={day}/>
                      }
                      else{
                        return <DayItem monthNumber={monthNumber} state='active' key={Math.random()} day={day}/>
                      }
                    }
                    if(monthNumber < dateSelector.currentDate.getMonth()){
                      return <DayItem monthNumber={monthNumber} state='disabled' key={Math.random()} day={day}/>
                    }
                    else{
                      return <DayItem monthNumber={monthNumber} state='active' key={Math.random()} day={day}/>
                    }
                  })}
              </div>
          </div>
      </div>
    </div>
  )
}

export default CalendarMonth
export {}