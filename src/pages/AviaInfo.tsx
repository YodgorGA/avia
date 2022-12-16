import React,{FC} from 'react'
import '../scss/index.scss'
import ButtonTime from '../components/ButtonTime';
import {useAppSelector } from '../app/hooks';
import { selectTravelData } from '../feachures/travelDataReducers';
import { selectAviaInfo } from '../feachures/aviaInfoRducers';



const AviaInfo:FC = () => {
    
const travelSelector = useAppSelector(selectTravelData);
const aviaInfoSelector = useAppSelector(selectAviaInfo);
return (
<div className='ticket_wrapper'>
    <div className="ticket">
        <div className="ticket_logo-container logo_ticket">
            <div className="logo_sticker">
                <p>Невозвратный</p>
            </div>
            <div className="logo">
                <div className="logo_img"></div>
                <div className="logo_title">
                    <p>S7 Airlines</p>
                </div>
            </div>
        </div>
        <div className="ticket_info-container info_ticket">
            <div className="info_top">
                <div className="info_timeBlock timeBlock">
                    <div className="timeBlock_time"><p>{aviaInfoSelector.departureTime}</p></div>
                    <div className="timeBlock_place"><p>{travelSelector.from}</p></div>
                    <div className="timeBlock_date"><p>{travelSelector.departure}</p></div>
                </div>
                <div className="info_travelScheme"></div>
                <div className="info_timeBlock timeBlock">
                    <div className="timeBlock_time"><p>{aviaInfoSelector.arrivalTime}</p></div>
                    <div className="timeBlock_place"><p>{travelSelector.to}</p></div>
                    <div className="timeBlock_date"><p>{travelSelector.departure}</p></div>
                </div>
                <div className="info_baggage baggageBlock">
                    <div className="baggageBlock_carryon"></div>
                    <div className="baggageBlock_suitcase"></div>
                </div>
            </div>
            <div className="info_bottom changeTimeBlock">
                <ButtonTime number={1} timeFrom='09:20' timeTo='11:05'/>
                <ButtonTime number={2} timeFrom='10:20' timeTo='12:05'/>
                <ButtonTime number={3} timeFrom='11:20' timeTo='13:05'/>
            </div>
        </div>
        <div className="ticket_price-container">
            <div className="ticket_price"><p>4 150₽</p></div>
        </div>
    </div>
</div>
)
}

export default AviaInfo

export {}