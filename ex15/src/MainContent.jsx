import { useState } from "react";


function MainContent(){

    const [joke,setJoke] = useState("");
    
    const showJoke = ()=>{
        setJoke("Why do programmers prefer dark mode? Because light attracts bugs!")
    }
    return(
        <main>
            <div>
                <button onClick={showJoke}>Display Joke</button>
                {joke && <p>{joke}</p>}
            </div>
        </main>
    );
}
export default MainContent;