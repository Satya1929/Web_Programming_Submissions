
import React,{useEffect, useState} from 'react';
function Joke(){
    const [joke,setJoke] = useState("");

    const fetchJoke = async() => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            setJoke(`${data.setup} ${data.punchline}`);
          } catch (error) {
            console.error(error);
            setJoke("Failed to fetch a joke.");
          }
    };
    
    useEffect(()=>{
        fetchJoke();
    },[])

    return(
        <div>
            <h2>{joke}</h2>

            <button onClick={fetchJoke}>Refresh Joke</button>
        </div>
    );
}
export default Joke