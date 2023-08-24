import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../context/Context";

import { AppUi } from "./AppUi";


function App(){

    return(
        <>
            <BrowserRouter>
                <AppProvider>
                    <AppUi />
                </AppProvider>
            </BrowserRouter>
        </>
    )
};

export { App };