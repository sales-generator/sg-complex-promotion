export const  daysInMonth = (month, year) => new Date(year, month+1, 0).getDate();
export const findClosestDay = dayscount => {
    let daysArray = [30];
    let daysCount = 0;
    if (dayscount === 31) {
        daysCount = 30 / 5;
        dayscount = dayscount - 1;
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

export const monthNames = (days) => {
    let monthsArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let currentMonthNumber = new Date().getMonth();
    let monthName = '';
    if (days === 31) {
        monthsArray.forEach((month, i, array) => {
            if (i === currentMonthNumber) {
                monthName = array[i + 1];
            }
        });
    } else {
        monthsArray.forEach((month, i) => {
            if (i === currentMonthNumber) {
                monthName = month;
            }
        });
    }

    return monthName;
};

/*
export const monthNamesLastDay = (days) => {
    let  monthsArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let currentMonthNumber = new Date().getMonth();
    let currentMonthNumber2 = new Date().getMonth()+1;
    let currentDayNumber = new Date().getDate();
    let monthName = '';
    if (currentDayNumber === 31) {
    monthsArray.forEach((month, i) => {
        if (i === currentMonthNumber2) {
            monthName = month;
        }
    });
    } if (currentDayNumber < 31) {
        monthsArray.forEach((month, i) => {
            if (i === currentMonthNumber) {
                monthName = month;
            }
        });
    }
    /!*daysArray.forEach((daysCount, monthsArray) => {
        if (daysCount == 31) {
            monthName = monthsArray + 2;
        }
    });*!/
    /!*monthsArray.forEach((month, i) => {
        if (i === currentMonthNumber) {
            monthName = month;
        }
    });*!/

        /!*if (currentDayNumber === 31) {
            monthName = currentMonthNumber2;
            console.log(currentDayNumber + ' это тут')
        } else {
            monthName = currentMonthNumber;
        }*!/

    return monthName;
};*/
