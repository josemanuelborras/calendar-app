import { useEffect, useState, useMemo } from 'react';

const CalendarHook = () => {

    const current = useMemo(() => new Date(), []);
    // const current = useMemo(() => new Date(2022, 11, 5), []);

    

    const [newMoment, setNewMoment] = useState(current);

    const calculated = `${newMoment.getDate()}/${newMoment.getMonth() + 1}/${newMoment.getFullYear()}`;

    const reset = () => {
        setNewMoment(current);
    }

    const [todayMonthString, setTodayMonthString] = useState("");
    const [todayDayString, setTodayDayString] = useState("");

    const [monthString, setMonthString] = useState("");
    const [monthPosition, setMonthPosition] = useState(newMoment.getMonth());

    const [dayString, setDayString] = useState("");
    const [dayPosition, setDayPosition] = useState(newMoment.getDay());

    const today = `${current.getDay()}, ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    useEffect(() => {

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const days = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];

        setTodayMonthString(months[current.getMonth()]);
        setTodayDayString(days[current.getDay()]);

        setMonthString(months[monthPosition]);
        setDayString(days[dayPosition])

    }, [current, monthPosition, dayPosition]);

    

    const nextYear = () => {
        const newYear = new Date(newMoment.getFullYear() + 1, newMoment.getMonth(), newMoment.getDate());
        setNewMoment(newYear);
        setMonthPosition(newYear.getMonth());
        setDayPosition(newYear.getDay());
    }

    const lastYear = () => {
        const newYear = new Date(newMoment.getFullYear() - 1, newMoment.getMonth(), newMoment.getDate());
        setNewMoment(newYear);
        setMonthPosition(newYear.getMonth());
        setDayPosition(newYear.getDay());
    }

    const nextMonth = () => {
        const newMonth = new Date(newMoment.getFullYear(), newMoment.getMonth() + 1, newMoment.getDate());
        setNewMoment(newMonth);
        setMonthPosition(newMonth.getMonth());
        setDayPosition(newMonth.getDay());
    }

    const lastMonth = () => {
        const newMonth = new Date(newMoment.getFullYear(), newMoment.getMonth() - 1, newMoment.getDate());
        setNewMoment(newMonth);
        setMonthPosition(newMonth.getMonth());
        setDayPosition(newMonth.getDay());
    }

    const nextDate = () => {
        const newDate = new Date(newMoment.getFullYear(), newMoment.getMonth(), newMoment.getDate() + 1);
        setNewMoment(newDate);
        setMonthPosition(newDate.getMonth());
        setDayPosition(newDate.getDay());
    }

    const lastDate = () => {
        const newDate = new Date(newMoment.getFullYear(), newMoment.getMonth(), newMoment.getDate() - 1);
        setNewMoment(newDate);
        setMonthPosition(newDate.getMonth());
        setDayPosition(newDate.getDay());
    }

    const nextDay = () => {
        const newDay = new Date(newMoment.getFullYear(), newMoment.getMonth(), newMoment.getDate() + 1);
        setNewMoment(newDay);
        setMonthPosition(newDay.getMonth());
        setDayPosition(newDay.getDay());
        if(newDay.getDay() === 0) {
            const backToStart = new Date(newMoment.getFullYear(), newMoment.getMonth(), newMoment.getDate() - 6);
            setNewMoment(backToStart);
            setMonthPosition(backToStart.getMonth());
            setDayPosition(backToStart.getDay());
        }else {
            setNewMoment(newDay);
            setMonthPosition(newDay.getMonth());
            setDayPosition(newDay.getDay());
        }
    }

    const lastDay = () => {
        const newDay = new Date(newMoment.getFullYear(), newMoment.getMonth(), newMoment.getDate() - 1);
        setNewMoment(newDay);
        setMonthPosition(newDay.getMonth());
        setDayPosition(newDay.getDay());
        if(newDay.getDay() === 6) {
            const backToStart = new Date(newMoment.getFullYear(), newMoment.getMonth(), newMoment.getDate() + 6);
            setNewMoment(backToStart);
            setMonthPosition(backToStart.getMonth());
            setDayPosition(backToStart.getDay());
        }else {
            setNewMoment(newDay);
            setMonthPosition(newDay.getMonth());
            setDayPosition(newDay.getDay());
        }
    }  


    return {
        current,
        today,
        todayMonthString,
        todayDayString,
        newMoment,
        calculated,
        reset,
        monthString,
        dayString,
        nextYear,
        lastYear,
        nextMonth,
        lastMonth,
        nextDate,
        lastDate,
        nextDay,
        lastDay
    }

}

export default CalendarHook;