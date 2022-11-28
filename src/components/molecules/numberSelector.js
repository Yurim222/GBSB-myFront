import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function NumberSelector() {

    const [open, setOpen] = useState(0);
    const [people, setPeople] = useState(0);
    const [child, setChild] = useState(0);

    const toggleHandler = () => {
        setOpen(open => !open);
    }

    const plusPeopleHandler = () => {
        setPeople(people + 1); 
    }

    const minusPeopleHandler = () => {
        setPeople(people - 1); 

        if (people < 1) {
            setPeople(0);
        }
    }

    const plusChildHandler = () => {
        setChild(child + 1);
    }

    const minusChildHandler = () => {
        setChild(child - 1); 

        if (child < 1) {
            setChild(0);
        }
    }

    return(
        <div>
            <div className="w-full h-12 bg-gray-light border border-solid border-gray-main flex items-center justify-between px-0.8vw">
                { child > 0 ? (
                    <div className="flex gap-x-0.6vw items-center">
                        <PersonIcon className="scale-125" />
                        <p>성인</p>
                        <div className="flex gap-x-0.3vw items-center">
                            <p>{people}</p>
                            <p>명</p>
                        </div>
                        <p>·</p>
                        <p>아동</p>
                        <div className="flex gap-x-0.3vw items-center">
                            <p>{child}</p>
                            <p>명</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-x-0.6vw items-center">
                        <PersonIcon className="scale-125" />
                        <p>성인</p>
                        <div className="flex gap-x-0.3vw items-center">
                            <p>{people}</p>
                            <p>명</p>
                        </div>
                    </div>
                )}
                {open ? <ExpandLessIcon className="scale-125" onClick={toggleHandler} /> : <ExpandMoreIcon className="scale-125" onClick={toggleHandler} />}
            </div>
            { open ? (
                <div>
                    <div className="w-full bg-gray-light border border-solid border-gray-main mt-0.5vw">
                        <div className="w-full h-12 border-b border-solid border-gray-main flex items-center justify-between px-0.8vw">
                            <p>성인</p>
                            <div className="flex gap-x-0.8vw">
                                <AddCircleOutlineIcon onClick={plusPeopleHandler} />
                                <div className="flex w-1vw justify-center">
                                    <p>{people}</p>
                                </div>
                                <RemoveCircleOutlineIcon onClick={minusPeopleHandler} />
                            </div>
                        </div>
                        <div className="w-full h-12 flex items-center justify-between px-0.8vw">
                            <p>아동</p>
                            <div className="flex gap-x-0.8vw">
                                <AddCircleOutlineIcon onClick={plusChildHandler} />
                                <div className="flex w-1vw justify-center">
                                    <p>{child}</p>
                                </div>
                                <RemoveCircleOutlineIcon onClick={minusChildHandler} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}
        </div>
    )
    
}

export default NumberSelector;