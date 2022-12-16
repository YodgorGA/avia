import React ,{FC,useEffect,useState}from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { 
fetchFromHelperData,
fetchToHelperData,
setIsFromHelperOpen,
setIsToHelperOpen,
setFromQuery,
setToQuery
} from '../feachures/appStateReducers';
import { selectTravelData } from '../feachures/travelDataReducers';
import '../scss/index.scss'

interface InputProps{
    placeholder: string,
    purpose:string
    label:string
}

const Input:FC<InputProps> = ({purpose,placeholder,label,...InputProps}) => {
  const dispatch = useAppDispatch();
  const travelSelector = useAppSelector(selectTravelData);
  const [text,setText] = useState('');

  const changeHandler = (e:React.FormEvent<HTMLInputElement>)=>{
    const targetValue = e.currentTarget.value;
    setText(targetValue);

    if(purpose ==='from'){
      dispatch(setFromQuery(targetValue));
      dispatch(setIsFromHelperOpen(true));
    }
    else{
      dispatch(setToQuery(targetValue));
      dispatch(setIsToHelperOpen(true));
    }
  }
  const getInputValue = ()=>{
    if(purpose === 'from'){
      if(travelSelector.from !== ''){
        return travelSelector.from
      }
      else{
        return text
      }
    }
    if(purpose === 'to'){
      if(travelSelector.to !==''){
        return travelSelector.to
      }
      else{
        return text
      }
    }
  }
  useEffect(()=>{
    if(text.length <1){
      if(purpose==='from'){
        dispatch(setIsFromHelperOpen(false));
      }
      else{
        dispatch(setIsToHelperOpen(false));
      }
    }
    else{
      if(purpose==='from'){
        dispatch(fetchFromHelperData(text));
      }
      else{
        dispatch(fetchToHelperData(text));
      }
      
    }
  },[text])

  return (
    <div className={'input_container'}>
      <label className={'input_label'}>{label}</label>
      <input className={"input"}
      placeholder={placeholder} 
      value={getInputValue()} 
      onChange={changeHandler}/>
    </div>
  )
}

export default Input