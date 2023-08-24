import cv from "../../assets/cv.pdf";
import resume from "../../assets/resume.pdf"

function Resume({ data }){

    return(
        <>
            <div className="about-me--resume-button">
                {data.language == "spanish" ? <a className={data.themeColor ? "button-white-shadow" : "button-black-shadow"} href={cv} download="sintesis curricular">Sintesis curricular.</a> : <a className={data.themeColor ? "button-white-shadow" : "button-black-shadow"} href={resume} download="resume">Resume.</a>}
            </div>
        </>
    )
};

export { Resume };