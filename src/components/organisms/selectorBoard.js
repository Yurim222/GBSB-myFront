import PlaceSelector from "../molecules/placeSelector.js";
import DateSelector from "../molecules/dateSelector.js";

function selectorBoard() {
    return(
        <div className="w-full px-default">
            <div className="h-80 flex justify-center">  
                <PlaceSelector />
            </div>
            <p>날짜</p>
            <div className="h-80 flex justify-center">
                <DateSelector />
            </div>
        </div>
    );
}

export default selectorBoard;