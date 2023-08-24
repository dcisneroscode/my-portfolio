import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti"

function Footer({ data }){

    return(
        <>
            <footer>
                <div className="wrapper--footer">
                <h2>{data.language == "spanish" ? "Contacto." : "Contact."}</h2>
                    <div className="footer--location">
                        <TiLocation />
                        <p>Caracas, Venezuela.</p>
                    </div>
                    <div className="footer--github">
                        <AiFillGithub />
                        <a href="https://github.com/dcisneroscode" target="_blank">{data.language == "spanish" ? "Ir a mi Github." : "Go to my Github."}</a>
                    </div>
                    <div className="footer--email">
                        <MdEmail />
                        <p>dcisneroscode@gmail.com</p>
                    </div>
                </div>
            </footer>
        </>
    )
};

export { Footer };