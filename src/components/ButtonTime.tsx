import React,{FC}from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectAviaInfo, setActiveButtonNumber, setArrivalTime, setDepartureTime } from '../feachures/aviaInfoRducers';

interface ButtonTimeProps{
    timeFrom:string,
    timeTo:string,
    number:number,
}

const ButtonTime:FC<ButtonTimeProps> = ({timeFrom,timeTo,number}) => {
    const aviaInfoSelector = useAppSelector(selectAviaInfo);
    const dispatch = useAppDispatch();
    const clickHandler = () =>{
        dispatch(setActiveButtonNumber(number));
        dispatch(setDepartureTime(timeFrom));
        dispatch(setArrivalTime(timeTo));
    }
    if(number === aviaInfoSelector.activeButtonNumber){
        return (
            <button className={`changeTimeBlock_button__active`}>
                <div className="changeTimeBlock_left"><p>{timeFrom}</p></div>
                <div className="changeTimeBlock_right"><p>{timeTo}</p></div>
            </button>
          ) 
    }
    else{
        return (
            <button onMouseDown={clickHandler} className={`changeTimeBlock_button`}>
                <div className="changeTimeBlock_left"><p>{timeFrom}</p></div>
                <div className="changeTimeBlock_right"><p>{timeTo}</p></div>
            </button>
          ) 
    }
  
}

export default ButtonTime
export {}