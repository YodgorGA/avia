import React,{FC} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getCurrentMonthDays } from '../feachures/dateFeachures';
import { decreaseMonthBias, increaseMonthBias, selectDateState } from '../feachures/dateReducers';

interface ButtonMonthProps{
    position:string
}
const ButtonMonth:FC<ButtonMonthProps> = ({position,...ButtonMonthProps}) => {
  const dateSelector = useAppSelector(selectDateState);
  const dispatch = useAppDispatch();
  const clickHandler = () =>{
    if(position === 'Left'){
      dispatch(decreaseMonthBias())
      getCurrentMonthDays(dateSelector.monthBias);
    }
    else{
      dispatch(increaseMonthBias())
    }
  }
  return (
    <div onMouseDown={clickHandler} className={`calendar_month${position}ButtonWrapper`}>
        <div className={`calendar_month${position}Button`}>
            <div className={`calendar_month${position}Arrow`}></div>
        </div>
    </div>
  )
}

export default ButtonMonth
export {}