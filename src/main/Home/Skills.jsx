import { skills } from "../../data/data";

function Skills({ data }){

    return(
        <>
            <div className="about-me--skills">
                <h2>{data.language == "spanish" ? "Habilidades Destacadas." : "outstanding skills"}</h2>
                <div className="about-me--skills-wrapper">
                    {data.language == "spanish" ? skills[0].spanish.map((skill, index) =>{
                        return(
                            <>
                            <div>
                                <h3 key={index}>{skill.title}</h3>
                                <p key={index}>{skill.content}</p>
                            </div>
                            </>
                        )
                    }) : skills[1].english.map((skill,index) =>{
                        return(
                            <>
                            <div>
                                <h3 key={index}>{skill.title}</h3>
                                <p key={index}>{skill.content}</p>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export { Skills }

{skills[0].spanish.map((skill, index) => {
   
})}