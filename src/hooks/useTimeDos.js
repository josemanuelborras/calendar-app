import { useEffect, useState, useMemo } from 'react';

const CalendarHook = () => {

    const current = useMemo(() => new Date(), []);

    const today = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const [newDate, setNewDate] = useState(current);

    const [month, setMonth] = useState(current.getMonth());
    const [newMonth, setNewMonth] = useState(newDate.getMonth());

    const [monthString, setMonthString] = useState("");

    const [monthPosition, setMonthPosition] = useState(month);

    useEffect(() => {

        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        setMonthString(months[monthPosition]);

    }, [current, monthPosition]);

    const nextMonth = () => {
        const date = new Date(current.getFullYear(), month + 1, current.getDate());
        setMonth(month + 1);
        setNewDate(date);
        setNewMonth(date.getMonth());
        setMonthPosition(date.getMonth());
    }

    return {
        current,
        today,
        newDate,
        month,
        newMonth,
        monthString,
        nextMonth
    }

}

export default CalendarHook;