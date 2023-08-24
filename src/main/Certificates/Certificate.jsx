import { certificate } from "../../data/data";
import { PiCertificateFill } from "react-icons/pi";


function Certificate({ data }){

    return(
        <>
            <h2>{data.language == "spanish" ? "Certificados." : "Certificates."}</h2>
            <div className="certificates--certificate">
                {data.language == "spanish" ? certificate[0].spanish.map((diploma, index) =>{
                    return(
                        <>
                            <div>
                                <PiCertificateFill color={data.themeColor ? "#FFFFFF" : "#111827"}/>
                                <h3 key={index}>{diploma.title}</h3>
                                <p>{diploma.certificate}</p>
                                <a href={diploma.url} target="_blank">Ver el certificado.</a>
                            </div>
                        </>
                    )
                }):
                certificate[1].english.map((diploma,index) =>{
                    return(
                        <>
                            <div>
                                <PiCertificateFill color={data.themeColor ? "#FFFFFF" : "#111827"} />
                                <h3 key={index}>{diploma.title}</h3>
                                <p>{diploma.certificate}</p>
                                <a href={diploma.url} target="_blank">See the certificate.</a>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
};

export { Certificate };