import { useState } from 'react';

import ReactCalendar from '../atoms/ReactCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function DateSelector() {

    const [open, setOpen] = useState(0);

    const toggleHandler = () => {
        setOpen(open => !open);
    }

    return(
        <div>
            <div className="w-full h-12 bg-gray-light border border-solid border-gray-main flex items-center justify-between px-0.8vw">
                <CalendarMonthIcon className="scale-125" />
                {open ? <ExpandLessIcon className="scale-125" onClick={toggleHandler} /> : <ExpandMoreIcon className="scale-125" onClick={toggleHandler} />}
            </div>
            {open ? (
                <div className="flex">
                    <ReactCalendar />
                </div>
            ) : ""}
        </div>
    )
    
}

export default DateSelector;