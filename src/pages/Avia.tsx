import React,{FC}from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import InputCalendar from '../components/InputCalendar';
import '../scss/index.scss';
import Calendar from '../components/Calendar';
import { selectTravelData } from '../feachures/travelDataReducers';
import { selectAppState } from '../feachures/appStateReducers';
import {useAppSelector} from '../app/hooks';
import InputDropdown from '../components/InputDropdown';

const Avia:FC = () => {
    const travelSelector = useAppSelector(selectTravelData);
    const appSelector = useAppSelector(selectAppState);
    return (
    <div className='page_wrapper'>
            <div className="page_top">
                <div className="page_content content">
                    <div className='content_container'>
                        <form className='content_form'>
                            <Input purpose={'from'} placeholder={'Город вылета'} label={'Откуда'}/>
                            <Input purpose={'to'}  placeholder={'Город прилёта'} label={'Куда'}/>
                            <InputDropdown 
                            helperState={appSelector.isFromHelperOpen} 
                            additionalClass='__from'
                            helperData={appSelector.fromHelperData}
                            helperCity={appSelector.fromHelperCity}
                            purpose={'from'}
                            />
                            <InputDropdown 
                            helperState={appSelector.isToHelperOpen} 
                            additionalClass='__to'
                            helperData={appSelector.toHelperData}
                            helperCity={appSelector.toHelperCity}
                            purpose={'to'}
                            />
                            <InputCalendar fieldName='departure' value={travelSelector.departure} label={'Дата отправления'} />
                            <InputCalendar fieldName='return' value={travelSelector.return} label={'Дата возвращения'} />
                        </form>
                    </div>
                </div>
            </div>
        <div className="page_bottom">
            <Calendar isVisible={appSelector.isCalendarOpen}/>
            <Button></Button>
        </div>
    </div>
  )
}

export default Avia

export {}