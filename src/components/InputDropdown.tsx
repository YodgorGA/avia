import React,{FC} from 'react'
import { useAppDispatch } from '../app/hooks';
import {IObj,ICity} from '../app/interfaces.js';
import { setDataFrom,setDataTo } from '../feachures/travelDataReducers';
import { setIsToHelperOpen,setIsFromHelperOpen } from '../feachures/appStateReducers';
interface InputDropdownProps{
    additionalClass:string,
    helperState:boolean,
    helperData:IObj,
    helperCity:string
    purpose:string,
}
const InputDropdown:FC<InputDropdownProps> = 
({helperState,additionalClass,helperData,helperCity,purpose,...InputDropdownProps}) => 
    {   
        const dispatch = useAppDispatch();
        const clickHandler = (e:React.MouseEvent<HTMLDivElement>)=>{
            let child = e.currentTarget.childNodes[0].textContent;
            if(purpose === 'from'){
                if(child === null){
                    child = ''
                }
                dispatch(setDataFrom(`${child}, ${helperCity}`));
                dispatch(setIsFromHelperOpen(false));
            }
            else{
                if(child === null){
                    child = ''
                }
                dispatch(setDataTo(`${child}, ${helperCity}`));
                
                dispatch(setIsToHelperOpen(false));
            }
            
        }
        if(helperState === true){
            return (
            <div className={`input_dropdown${additionalClass} helperDropdown_items`}>
                <div className="helperDropdown_city">{helperCity}</div>
                {
                helperData.map((obj:ICity)=>{
                    return (
                    <div 
                    className="helperDropdown_airport" 
                    onMouseDown={clickHandler}
                    key={Math.random()}
                    >{obj.name}</div>
                    )})
                }
            </div>)
        }
        else{
            return (
                <div className='input_dropdown'></div>
            )
        }
}

export default InputDropdown