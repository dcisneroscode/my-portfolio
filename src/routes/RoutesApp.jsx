import { Routes, Route } from "react-router-dom";
import { Home } from "../main/Home/Home";
import { Certificates } from "../main/Certificates/Certificates";
import { Projects } from "../main/Projects/Project";
import { NotFound } from "../main/notFound/NotFound";


function RoutesApp(){

    return(
        <>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/certificates" element={ <Certificates />} />
                <Route path="/projects" element={ <Projects />} />
                <Route path="*" element={ <Home />} />
            </Routes>
        </>
    )

};

export { RoutesApp };