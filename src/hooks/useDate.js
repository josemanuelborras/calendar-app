import { useState, useMemo } from 'react';

const DateHook = () => {

    // Sets current day. Setting with constants for each element to get 00:00:00 on hour, minutes and seconds.
    // const current = useMemo(() => new Date(), []);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currenDate = new Date().getDate();    
    
    const current = useMemo(() => new Date(currentYear, currentMonth, currenDate), [currentYear, currentMonth, currenDate]);

    // Month names
    const getMonth = (month) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month];
    }

    // Day mames
    const getDay = (day) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }

    // Sets ordinal numbers (1st, 2nd, 3rd...)
    const getOrdinal = (day) => {
        const date = String(day.getDate()).slice(-1);

        if(Number(date) === 1) {
            return 'st'
        } if (Number(date) === 2) {
            return 'nd'
        } if (Number(date) === 3) {
            return 'rd'
        } else {
            return 'th'
        }
    }

    // Gets the week numbre inside current year
    const getWeek = (date) => {
        const yearsFirstDay = new Date(date.getFullYear(), 0, 1);
        return Math.ceil((Math.floor((date - yearsFirstDay)/(24*60*60*1000)))/7);
    }

    // Sets a current property inside date object to recognize current date
    const getCurrent = (date) => {
        if(date.getFullYear() === current.getFullYear() && date.getMonth() === current.getMonth() && date.getDate() === current.getDate()){
            return true;
        } else {
            return false;
        }
    }

    // Sets January 1st in every year; first day of every given year
    const yearsFirstDay = (date) => {
        const firstDay = new Date(date.getFullYear(), 0, 1);
        return {
            year: firstDay.getFullYear(),
            monthNumber: firstDay.getMonth(),
            month: getMonth(firstDay.getMonth()),
            week: getWeek(firstDay),
            date: firstDay.getDate(),
            ordinal: getOrdinal(firstDay),
            day: getDay(firstDay.getDay()),
            dayNumber: firstDay.getDay(),
            current: getCurrent(firstDay)
        }
    }

    // Sets December 31st in every year; last day of every given year
    const yearsLastDay = (date) => {
        const lastDay = new Date(date.getFullYear() + 1, 0, 0);
        return {
            year: lastDay.getFullYear(),
            monthNumber: lastDay.getMonth(),
            month: getMonth(lastDay.getMonth()),
            week: getWeek(lastDay),
            date: lastDay.getDate(),
            ordinal: getOrdinal(lastDay),
            day: getDay(lastDay.getDay()),
            dayNumber: lastDay.getDay(),
            current: getCurrent(lastDay)            
        }
    }

    // Sets number of days of every given year: 366 or 365
    const yearDays = (date) => {
        const year = date.getFullYear() % 4 === 0 || (date.getFullYear() % 100 && date.getFullYear() % 4 === 0);
        return year ? 366 : 365;
    }

    // Sets first year of the month
    const monthsFirstDay = (date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return {
            year: firstDay.getFullYear(),
            monthNumber: firstDay.getMonth(),
            month: getMonth(firstDay.getMonth()),
            week: getWeek(firstDay),
            date: firstDay.getDate(),
            ordinal: getOrdinal(firstDay),
            day: getDay(firstDay.getDay()),
            dayNumber: firstDay.getDay()
        }
    }

    // Sets last year of the month
    const monthsLastDay = (date) => {
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return {
            year: lastDay.getFullYear(),
            monthNumber: lastDay.getMonth(),
            month: getMonth(lastDay.getMonth()),
            week: getWeek(lastDay),
            date: lastDay.getDate(),
            ordinal: getOrdinal(lastDay),
            day: getDay(lastDay.getDay()),
            dayNumber: lastDay.getDay()
        }
    }

    // Sets number of days in a month
    const monthsDays = (date) => {
        const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        return days;
    }

    // Sets boolean for current month
    const isCurrentMonth = (date, monthDate) => {
        if(date.getMonth() === monthDate.getMonth()){
                return true;
        } else {
            return false;
        }
    }

    // Sets the 42 days in the calendar's month structure, from the first Sunday, to the last Saturday
    const calendarDays = (date, monthFirstDay) => {
        const getDays = (startDate, endDate) => {
            let dates = [];
            let monthDate = startDate;
            
            while (monthDate <= endDate){
                dates = [...dates, {
                    year: monthDate.getFullYear(),
                    monthNumber: monthDate.getMonth(),
                    month: getMonth(monthDate.getMonth()),
                    date: monthDate.getDate(),
                    day: getDay(monthDate.getDay()),
                    dayNumber: monthDate.getDay(),
                    isCurrentMonth: isCurrentMonth(date, monthDate),
                    currentDay: getCurrent(monthDate)
                }];
                monthDate = new Date(monthDate.getFullYear(), monthDate.getMonth(), monthDate.getDate() + 1);
            }
            return dates;
        }
        
        const first = new Date(date.getFullYear(), date.getMonth(), 1 - monthFirstDay);

        const last = new Date(date.getFullYear(), date.getMonth() + 1, (42 - (monthFirstDay + (new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())))) ;
        
        return getDays(first, last);
        
    }

    // Gets first day in the current week
    const firstWeekDay = (date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
        return {
            year: firstDay.getFullYear(),
            monthNumber: firstDay.getMonth(),
            month: getMonth(firstDay.getMonth()),
            week: getWeek(firstDay),
            date: firstDay.getDate(),
            ordinal: getOrdinal(firstDay),
            day: getDay(firstDay.getDay()),
            dayNumber: firstDay.getDay()
        }
    }

    // Gets last day in the current week
    const lastWeekDay = (date) => {
        const lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - date.getDay()));
        return {
            year: lastDay.getFullYear(),
            monthNumber: lastDay.getMonth(),
            month: getMonth(lastDay.getMonth()),
            week: getWeek(lastDay),
            date: lastDay.getDate(),
            ordinal: getOrdinal(lastDay),
            day: getDay(lastDay.getDay()),
            dayNumber: lastDay.getDay()
        };
    }

    // Gets days im current week
    const weekDays = (date) => {
        const getDays = (startDate, endDate) => {
            let dates = [];
            const weekDate = new Date(startDate);
            while (weekDate <= endDate) {
                dates = [...dates, {
                    year: weekDate.getFullYear(),
                    monthNumber: weekDate.getMonth(),
                    month: getMonth(weekDate.getMonth()),
                    date: weekDate.getDate(),
                    day: getDay(weekDate.getDay()),
                    dayNumber: weekDate.getDay(),
                    isCurrentMonth: isCurrentMonth(date, weekDate),
                    currentDay: getCurrent(weekDate)
                }];
                weekDate.setDate(weekDate.getDate() + 1);
            }
            return dates;
        }

        const first = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());

        const last = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (6 - date.getDay()));

        return getDays(first, last);
    }

    // Sets the main Date Object
    const getDate = (date) => {        
        return {
            year: date.getFullYear(),
            yearDates: {
                first: yearsFirstDay(date),
                last: yearsLastDay(date),
            },
            yearDays: yearDays(date),
            monthNumber: date.getMonth(),
            month: getMonth(date.getMonth()),
            monthDates: {
                first: monthsFirstDay(date),
                last:monthsLastDay(date),
            },
            monthDays: monthsDays(date),
            calendarDays: calendarDays(date, monthsFirstDay(date).dayNumber),
            week: getWeek(date),
            weekDates: {
                first: firstWeekDay(date),
                last: lastWeekDay(date)
            },
            weekDays: weekDays(date),
            date: date.getDate(),
            ordinal: getOrdinal(date),
            day: getDay(date.getDay()),
            dayNumber: date.getDay(),
            currentDay: getCurrent(date)
        }
    }

    const today = getDate(current);    

    const [dating, setDating] = useState(today);

    // Years counters
    const nextYear = () => {
        const newDate = new Date(dating.year + 1, dating.monthNumber, dating.date);
        setDating(getDate(newDate));
    }

    const lastYear = () => {
        const newDate = new Date(dating.year - 1, dating.monthNumber, dating.date);
        setDating(getDate(newDate));
    }

    // Months counters
    const nextMonth = () => {
        const newDate = new Date(dating.year, dating.monthNumber + 1, dating.date);
        setDating(getDate(newDate));
    }

    const lastMonth = () => {
        const newDate = new Date(dating.year, dating.monthNumber - 1, dating.date);
        setDating(getDate(newDate));
    }

    // Weeks counters
    const nextWeek = () => {
        const newDate = new Date(dating.year, dating.monthNumber, dating.date + 7);
        console.log(newDate);
        setDating(getDate(newDate));
    }

    const lastWeek = () => {
        const newDate = new Date(dating.year, dating.monthNumber, dating.date - 7);
        setDating(getDate(newDate));
    }

    // Date counters
    const nextDate = () => {
        const newDate = new Date(dating.year, dating.monthNumber, dating.date + 1);
        setDating(getDate(newDate));
    }

    const lastDate = () => {
        const newDate = new Date(dating.year, dating.monthNumber, dating.date - 1);
        setDating(getDate(newDate));
    }

    // From Sunday to Saturday in the same week counter
    const nextDay = () => {
        const newDate = new Date(dating.year, dating.monthNumber, dating.date + 1);
        setDating(getDate(newDate));
        if(newDate.getDay() === 0){
            const backToStart = new Date(dating.year, dating.monthNumber, dating.date - 6);
            setDating(getDate(backToStart));
        }else {
            setDating(getDate(newDate));
        }        
    }

    const lastDay = () => {
        const newDate = new Date(dating.year, dating.monthNumber, dating.date - 1);
        setDating(getDate(newDate));
        if(newDate.getDay() === 0){
            const backToStart = new Date(dating.year, dating.monthNumber, dating.date + 6);
            setDating(getDate(backToStart));
        }else {
            setDating(getDate(newDate));
        }        
    }

    // Resets to current day
    const reset = () => {
        setDating(getDate(current));
    }

    return {
        today,
        dating,        
        nextYear,
        lastYear,
        nextMonth,
        lastMonth,
        nextWeek,
        lastWeek,
        nextDate,
        lastDate,
        nextDay,
        lastDay,
        getDay,
        reset
    }

}

export default DateHook;