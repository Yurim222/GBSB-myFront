import { useState } from "react";
import styled from "styled-components";


function ThemeButton({title, imgSrc}) {

    const [hover, setHover] = useState(0);

    return(
        <div className="relative w-theme-width h-theme-height rounded-xl" onMouseOver={() => setHover(1)} onMouseOut={() => setHover(0)}>
            <div>
                <img className="w-theme-width h-theme-height object-cover rounded-xl" src={imgSrc} alt="default"></img>
            </div>
            {hover ? (
                <div className="absolute top-0 w-theme-width h-theme-height rounded-xl opacity-0 hover:bg-blue-main hover:opacity-90 duration-500 flex justify-center items-center">
                    <p className="text-white">{title}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );

}

export default ThemeButton;