import { useContext } from "react";
import { appContext } from "../../context/Context";
import { Title } from "./Title";
import {  MyPhoto } from "./MyPhoto";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { CoverLetter } from "./CoverLetter";
import { Resume } from "./Resume";

function Home(){
    const {
        language,
        themeColor
    } = useContext(appContext);

    return(
        <>
            <section className="about-me">
                
                <Title data={{ language }}/>

                <MyPhoto />

                <AboutMe data={{
                    language
                }} />

                <Skills data={{
                    language
                }} />
                    

                 <CoverLetter  data={{
                    language
                 }} />

                 <Resume data={{
                    language,
                    themeColor
                 }} />

            

            </section>
                
                
        </>
    )
}

export { Home };