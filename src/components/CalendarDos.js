import React, { useEffect } from 'react'
import useTimeDos from '../hooks/useTimeDos';

const CalendarDos = () => {

    const { 
        current,
        newDate,
        // year,
        month,
        newMonth,
        
        
        monthString,
        // nextYear,
        // lastYear,
        nextMonth,
        // lastMonth,
        // nextDay,
        // lastDay,
        // sigMonth,
        // antMonth
    } = useTimeDos();

    useEffect(() => {

    }, []);
    

    return (
        <div>
            <div><h1>Calendar</h1></div>
            Current date: { current.toDateString() }
            <br />
            New date: { newDate.toDateString() }
            <hr />
            Month: { month }
            <br />
            Month String: { monthString }
            <br />
            New Month: { newMonth }
            <br />
            {/* <button onClick={() => lastMonth()}>Last Month</button> */}
            <button onClick={() => nextMonth()}>Next Month</button>
        </div>
    )
}

export default CalendarDos;