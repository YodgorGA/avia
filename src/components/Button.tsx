import React,{FC} from 'react'
import {selectTravelData} from '../feachures/travelDataReducers'
import {useAppSelector} from '../app/hooks'
import { Link } from 'react-router-dom';
const Button:FC = () => {
  const selector = useAppSelector(selectTravelData);
  if(selector.from && selector.to && selector.departure !== ''){
    return (
      <div className='button_wrapper'>
          <Link 
          to={'/info'}
          className={'button'}
          >Найти билеты</Link>
      </div>
    )
  }
  return (
    <div className='button_wrapper'>
    <button 
      disabled={true} 
      className={'button_disabled'}
    >Найти билеты</button>
    </div>
  )
  
}

export default Button

export {}