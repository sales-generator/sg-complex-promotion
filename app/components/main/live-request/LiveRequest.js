import React from 'react';
import {daysInMonth, findClosestDay, closestValue, monthNames} from '../../../utils/time.date';
const LiveRequest = () => {
    let currentDate = new Date();
    let daysCount = daysInMonth(currentDate.getYear(), currentDate.getMonth());
    let fiveDaysArray = findClosestDay(daysCount), actionDay = closestValue(fiveDaysArray, currentDate.getDate()),
        currentMonthName = monthNames();
    return(
        <aside className="live-request">
            <p className="live-request__text">Оставьте заявку</p>
            <p className="live-request__text">до <span>{actionDay} {currentMonthName} </span></p>
            <p className="live-request__text">и получите аудит</p>
            <p className="live-request__text"><span>в подарок</span></p>
        </aside>
    )
};

export default LiveRequest;