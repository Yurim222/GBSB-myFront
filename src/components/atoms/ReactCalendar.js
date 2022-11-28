import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

const ReactCalendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="flex">
            <Calendar 
                onChange={onChange}
                value={value}
                formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
            />
        </div>
    )  
}

export default ReactCalendar;