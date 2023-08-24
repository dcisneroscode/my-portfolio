import  Typewriter  from "typewriter-effect";
import { typeWritterData } from "../../data/data";

function Title({ data }){

    return(
        <>
          <h1>
            
            <Typewriter options={{
            strings: data.language == "spanish" ? typeWritterData[0].spanish : typeWritterData[1].english,
            delay: 200,
            autoStart: true,
            loop: true
            }}/>
          </h1>
        </>
    )
};

export { Title}