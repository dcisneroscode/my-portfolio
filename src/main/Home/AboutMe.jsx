import { aboutMe } from "../../data/data";

function AboutMe({ data }){

    return(
        <>
            <div className="about-me--information">
                <p>{data.language == "spanish" ? aboutMe[0].spanish : aboutMe[1].english}</p>
            </div>
        </>
    )
};

export { AboutMe };