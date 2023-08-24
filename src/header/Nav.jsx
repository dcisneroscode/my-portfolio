import { useContext } from "react";
import { appContext } from "../context/Context";
import { LinksPage } from "../routes/LinksApp";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs"
 
function Nav(){
    const {
        themeColor,
        language,
        handleLanguageChange,
        handleColorChange
    } = useContext(appContext);


    return(
        <>
            <nav>
                <ul>
                    <li className="nav">
                        <LinksPage data={{
                            themeColor
                        }} />
                    </li>
                </ul>
                <button onClick={()=> handleColorChange()}>{themeColor ? <BsFillSunFill color="white" /> : <BsFillMoonFill color="#111827" />}</button>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="spanish">{language == "spanish" ? "español" : "spanish"}</option>
                    <option value="english">{language == "spanish" ? "inglés" : "english" }</option>
                </select>
            </nav>
        </>
    )
}

export { Nav };