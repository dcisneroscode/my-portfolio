import { github } from "../../data/data";
import { useContext } from "react";
import { appContext } from "../../context/Context";
import { BsFolderFill } from "react-icons/bs"

function Projects(){
    const {
        language,
        themeColor
    } = useContext(appContext);

    return(
        <>
            <section className="projects-wrapper">
                <h2>{language == "spanish" ? "Proyectos." : "Projects."}</h2>
                <div className="projects--content">
                    {language == "spanish" ? github[0].spanish.map((project, index) =>{
                        return(
                            <>
                                <div>
                                    <BsFolderFill color={themeColor ? "#FFFFFF" : "#111827"}/>
                                    <h3 key={index}>{project.title}</h3>
                                    <p>{project.content}</p>
                                    <a href={project.url} target="_blank">Ver el proyecto.</a>
                                </div>
                            </>
                        )
                    }):
                    github[1].english.map((project,index) =>{
                        return(
                            <>
                                <div>
                                    <BsFolderFill color={themeColor ? "#FFFFFF" : "#111827"} />
                                    <h3 key={index}>{project.title}</h3>
                                    <p>{project.content}</p>
                                    <a href={project.url} target="_blank">See the project.</a>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export { Projects };