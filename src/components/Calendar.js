import React from 'react'
import useTime from '../hooks/useTime';

import '../css/calendar.css';

const Calendar = () => {

    const {
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
    } = useTime();

    return (
        <div className='text-center'>
            <div className='title'>
                <h1>calendar-app</h1>
            </div>

            <hr />

            <div id='current-date'>
                <h2>Current Date:</h2>
                <p>{todayDayString}, {todayMonthString} {current.getDate()} {current.getFullYear()}</p>
            </div>

            <div id='calculated-date'>
                <h2>New Date:</h2>
                <p>{dayString}, {monthString} {current.getDate()} {current.getFullYear()}</p>
            </div>

            <hr />

            <div>
                <h2>Year:</h2>
                <div className="calculations-body">
                    <button onClick={() => lastYear()}> { "<" } </button>
                    <h3>{newMoment.getFullYear()}</h3>
                    <button onClick={() => nextYear()}> { ">" } </button>
                </div>
            </div>

            <hr />

            <div>
                <h2>Month:</h2>
                <div className="calculations-body">
                    <button onClick={() => lastMonth()}> { "<" } </button>
                    <h3>{monthString} ({newMoment.getMonth() + 1})</h3>
                    <button onClick={() => nextMonth()}> { ">" } </button>
                </div>
            </div>

            <hr />

            <div>
                <h2>Date:</h2>
                <div className="calculations-body">
                    <button onClick={() => lastDate()}> { "<" } </button>
                    <h3>{newMoment.getDate()}</h3>
                    <button onClick={() => nextDate()}> { ">" } </button>
                </div>
            </div>
            
            <hr />

            <div>
                <h2>Day of the Week:</h2>
                <div className="calculations-body">
                    <button onClick={() => lastDay()}> { "<" } </button>
                    <h3>{dayString} ({newMoment.getDay()})</h3>
                    <button onClick={() => nextDay()}> { ">" } </button>
                </div>
            </div>
            
            <hr />

            <div>
                <h2>Reset:</h2>
                <div>
                    <button onClick={() => reset()}>Reset to Current Date</button>
                </div>
            </div>

        </div>
    )
}

export default Calendar