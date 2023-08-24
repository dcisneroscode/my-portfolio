import { useContext } from "react";
import { appContext } from "../../context/Context";
import { AcademicProfile } from "./AcademicProfile";
import { Certificate } from "./Certificate";


function Certificates(){
    const {
        language,
        themeColor
    } = useContext(appContext)

    return(
        <>
            <section className="certificates">
                <AcademicProfile data={{
                    language
                }} />
                <Certificate data={{
                    language,
                    themeColor
                }} />
            </section>
        </>
    )
}

export { Certificates };