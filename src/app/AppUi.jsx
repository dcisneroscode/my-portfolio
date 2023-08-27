import { appContext } from "../context/Context";
import { useContext } from "react";
import { Header } from "../header/Header";
import { RoutesApp } from "../routes/RoutesApp";
import { Footer } from "../footer/Footer";

import "../css/main.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/aboutme.css";
import "../css/certificates.css";
import "../css/projects.css"



function AppUi(){
    const {
        themeColor,
        darkTheme,
        lightTheme,
        language
    } = useContext(appContext);


    return(
        <>
            <div className={themeColor ? darkTheme : lightTheme}>
                <Header />
                {/* <RoutesApp />
                <Footer data={{
                    language
                }} /> */}
            </div>
        </>
    )
};

export { AppUi };