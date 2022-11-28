import ThemeButton from "../atoms/themeButton";
import ThemeList from "../../data/ThemeList";

function ThemeSelector() {
    return(
        <div className="flex gap-x-theme-gap">
            {ThemeList.map(({ title, imgSrc }) => (
                    <ThemeButton
                        title={title}
                        imgSrc={imgSrc}
                    />
            ))}
        </div>
    );
}

export default ThemeSelector;