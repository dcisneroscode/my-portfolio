import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../context/Context";



function LinksPage(){
    const {
        themeColor,
        language,
        handleTagChange,
    } = useContext(appContext)

    return(
        <>
            {themeColor ? 
            <>
                <Link className="nav--activate nav--dark-color" onClick={() => handleTagChange(0)}to="/">{language == "spanish" ? "Sobre mi" : "About me"}</Link>
                <Link className="nav--dark-color"  onClick={() => handleTagChange(1)} to="/certificates">{language == "spanish" ? "Certificados" : "Certificates"}</Link>
                <Link className="nav--dark-color"  onClick={() => handleTagChange(2)} to="/projects">{language == "spanish" ? "Proyectos" : "Projects"}</Link>
            
            </>: 
            <>
                <Link className="nav--activate nav--light-color" onClick={() => handleTagChange(0)}to="/">{language == "spanish" ? "Sobre mi" : "About me"}</Link>
                <Link className="nav--light-color"  onClick={() => handleTagChange(1)} to="/certificates">{language == "spanish" ? "Certificados" : "Certificates"}</Link>
                <Link className="nav--light-color"  onClick={() => handleTagChange(2)} to="/projects">{language == "spanish" ? "Proyectos" : "Projects"}</Link>
            </>}
        </>
    )
}

export { LinksPage };