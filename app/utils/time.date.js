export const  daysInMonth = (month,year) => new Date(year, month, 0).getDate();
export const findClosestDay = dayscount => {
    let daysArray = [30];
    let daysCount = 0;
    if (dayscount > 30) {
        daysCount = (dayscount - 1) / 5;
        for (let i = 0; i < daysCount; i += 1) {
            dayscount = dayscount - 5;
            daysArray.push(dayscount);
        }
    } else {
        daysCount = dayscount / 5;
        for (let i = 0; i < daysCount; i += 1) {
            dayscount = dayscount - 5;
            daysArray.push(dayscount);
        }
    }
    daysArray.pop();
    return daysArray;
};
export const closestValue =(array, value) => {
    let closest = Math.max.apply(null, array), date = value;
    if(date === 31) {
        date = 0;
    }
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= date && array[i] < closest) closest = array[i];
    }

    return closest; // return the value
};

export const monthNames = () => {
    let monthsArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let currentMonthNumber = new Date().getMonth();
    let monthName = '';
    monthsArray.forEach((month, i) => {
        if (i === currentMonthNumber) {
            monthName = month;
        }
    });
    return monthName;
};