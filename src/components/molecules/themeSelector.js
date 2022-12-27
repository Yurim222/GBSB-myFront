import ThemeButton from "../atoms/themeButton";
import ThemeList from "../../data/ThemeList";
import { useState } from "react";

function ThemeSelector() {

    const [clicked, setClicked] = useState(0);

    console.log(clicked);

    return(
        <div className="flex gap-x-theme-gap">
            {ThemeList.map(({ title, imgSrc }) => (
                    <ThemeButton
                        title={title}
                        imgSrc={imgSrc}
                        clicked={setClicked}
                    />
            ))}
        </div>
    );
}

export default ThemeSelector;