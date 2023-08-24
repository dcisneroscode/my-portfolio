import { academicProfile } from "../../data/data";

function AcademicProfile({ data }){

    return(
        <>
            <h2>{data.language == "spanish" ? "Perfil Academico." : "Academic Profile."}</h2>
            <div className="certificates-academic">
                {data.language == "spanish" ? 
                <>
                    {academicProfile[0].spanish.map((academic, index) =>{
                        return(
                            <>
                                <div>
                                    <h3 key={index}>{academic.title}</h3>
                                    <p key={index}>{academic.academic}</p>
                                    <p key={index}>{academic.status}</p>
                                </div>
                            </>
                        )
                    })}
                </>:
                <>
                     {academicProfile[1].english.map((academic, index) =>{
                        return(
                            <>
                                <div>
                                    <h3 key={index}>{academic.title}</h3>
                                    <p key={index}>{academic.academic}</p>
                                    <p key={index}>{academic.status}</p>
                                </div>
                            </>
                        )
                    })}
                </>}
            </div>
        </>
    )
};

export { AcademicProfile };