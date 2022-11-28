import PlaceSelector from "../molecules/placeSelector.js";
import DateSelector from "../molecules/dateSelector.js";
import NumberSelector from "../molecules/numberSelector.js";
import TransSelector from "../molecules/transSelector.js";
import ThemeSelector from "../molecules/themeSelector.js";

function SelectorBoard() {
    return(
        <div className="w-full px-default mb-6vh">
            <div className="h-80 flex justify-center">
                <PlaceSelector />
            </div>
            <div className="flex flex-col gap-y-selector-gap">
                <div className="flex flex-col gap-y-1vw justify-center">
                    <p>날짜</p>
                    <div>
                        <DateSelector />
                    </div>
                </div>
                <div className="flex flex-col gap-y-1vw justify-center">
                    <p>인원</p>
                    <div>
                        <NumberSelector />
                    </div>
                </div>
                <div className="flex flex-col gap-y-1vw justify-center">
                    <p>이동 수단</p>
                    <div>
                        <TransSelector />
                    </div>
                </div>
                <div className="flex flex-col gap-y-1vw justify-center">
                    <p>테마별</p>
                    <div className="flex justify-center">
                        <ThemeSelector />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectorBoard;