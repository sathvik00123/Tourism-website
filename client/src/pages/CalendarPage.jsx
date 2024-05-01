import React from "react";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css'

const CalendarPage = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="main-cal">
            <h1 className="header">
                Find your time to plan for trips.
            </h1>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default CalendarPage;