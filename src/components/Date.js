import React from 'react'
import useTime from '../hooks/useDate';

import '../css/calendar.css';

const Calendar = () => {

    const {
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
        reset
    } = useTime();

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];

    return (
        <div className='text-center'>
            <div className='title'>
                <h1>calendar-app</h1>
            </div>

            <hr />

            <div id='current-date'>
                <h2>Current Date:</h2>
                <p>{today.day}, {today.month} {today.date}{today.ordinal} {today.year}</p>
            </div>

            <div className='calculated-date'>
                <h2>New Date:</h2>
                <p>{dating.day}, {dating.month} {dating.date}{dating.ordinal} {dating.year}</p>
            </div>

            <hr />

            <div>
                <h2>Year:</h2>
                <div className='calculated-date'>
                    <h2>Year First Date:</h2>
                    <p>
                        {dating.yearDates.first.day},&nbsp;
                        {dating.yearDates.first.month}&nbsp;
                        {dating.yearDates.first.date}{dating.yearDates.first.ordinal}&nbsp;
                        {dating.yearDates.first.year}
                    </p>
                </div>
                <div className='calculated-date'>
                    <h2>Year Last Date:</h2>
                    <p>
                        {dating.yearDates.last.day},&nbsp;
                        {dating.yearDates.last.month}&nbsp;
                        {dating.yearDates.last.date}{dating.yearDates.first.ordinal}&nbsp;
                        {dating.yearDates.last.year}
                    </p>
                </div>

                <div className="calculations-body">
                    <button title="Previous Year" onClick={() => lastYear()}> {"<"} </button>
                    <h3>{dating.year}</h3>
                    <button title="Next Year" onClick={() => nextYear()}> {">"} </button>
                </div>
            </div>

            <hr />

            <div>
                <h2>Month:</h2>
                <div className='calculated-date'>
                    <h2>Month First Date:</h2>
                    <p>
                        {dating.monthDates.first.day},&nbsp;
                        {dating.monthDates.first.month}&nbsp;
                        {dating.monthDates.first.date}{dating.monthDates.first.ordinal}&nbsp;
                        {dating.monthDates.first.year}
                    </p>
                </div>

                <div className='calculated-date'>
                    <h2>Month Last Date:</h2>
                    <p>
                        {dating.monthDates.last.day},&nbsp;
                        {dating.monthDates.last.month}&nbsp;
                        {dating.monthDates.last.date}{dating.monthDates.first.ordinal}&nbsp;
                        {dating.monthDates.last.year}
                    </p>
                </div>

                <div className="calculations-body">
                    <button title="Previous Month" onClick={() => lastMonth()}> {"<"} </button>
                    <h3>{dating.month}</h3>
                    <button title="Next Month" onClick={() => nextMonth()}> {">"} </button>
                </div>
                <div id="calendar-table">
                    <ol className="days-of-week">
                        {
                            weekDays.map(d => (
                                <li
                                    id={d}
                                    key={d}
                                >
                                    {d}
                                </li>
                            ))
                        }

                    </ol>

                    <ol className="days-grid">
                        {
                            dating.calendarDays.map(d => (
                                <li
                                    id={`${d.monthNumber}/${d.date}`}
                                    key={`${d.monthNumber}/${d.date}`}>
                                    {d.date}
                                </li>
                            ))
                        }

                    </ol>
                </div>
            </div>

            <hr />

            <div>
                <h2>Week:</h2>
                <div className='calculated-date'>
                    <h2>Week First Date:</h2>
                    <p>
                        {dating.weekDates.first.day},&nbsp;
                        {dating.weekDates.first.month}&nbsp;
                        {dating.weekDates.first.date}{dating.weekDates.first.ordinal}&nbsp;
                        {dating.weekDates.first.year}
                    </p>
                </div>

                <div className='calculated-date'>
                    <h2>Week Last Date:</h2>
                    <p>
                        {dating.weekDates.last.day},&nbsp;
                        {dating.weekDates.last.month}&nbsp;
                        {dating.weekDates.last.date}{dating.weekDates.last.ordinal}&nbsp;
                        {dating.weekDates.last.year}
                    </p>
                </div>

                <div className="calculations-body">
                    <button title="Previous Week" onClick={() => lastWeek()}> {"<"} </button>
                    <h3>{dating.week}</h3>
                    <button title="NextWeek" onClick={() => nextWeek()}> {">"} </button>
                </div>
                <div id="calendar-table">
                    <ol className="days-of-week">
                        {
                            weekDays.map(d => (
                                <li
                                    id={d}
                                    key={d}
                                >
                                    {d}
                                </li>
                            ))
                        }
                    </ol>

                    <ol className="days-grid">
                        {
                            dating.weekDays.map(d => (
                                <li
                                    id={`${d.monthNumber}/${d.date}`}
                                    key={`${d.monthNumber}/${d.date}`}>
                                    {d.date}
                                </li>
                            ))
                        }
                    </ol>
                </div>

            </div>

            <hr />

            <div>
                <h2>Date:</h2>
                <div>
                    <div className="calculations-body">
                        <button title="Previous Date" onClick={() => lastDate()}> {"<"} </button>
                        <h3>{dating.day} {dating.date}{dating.ordinal}</h3>
                        <button title="Next Date" onClick={() => nextDate()}> {">"} </button>
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <h2>Day:</h2>
                <div>
                    <div className="calculations-body">
                        <button title="Previous Day" onClick={() => lastDay()}> {"<"} </button>
                        <h3>{dating.day}</h3>
                        <button title="Next Day" onClick={() => nextDay()}> {">"} </button>
                    </div>

                </div>
            </div>

            <hr />

            <div>
                <h2>Reset:</h2>
                <div className="reset">
                    <button onClick={() => reset()}>Reset to Current Date</button>
                </div>
            </div>

        </div>
    )
}

export default Calendar