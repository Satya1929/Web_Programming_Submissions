import React,{useReducer} from 'react';
function Counter(){
    const reducer = (state,action)=>{
        switch (action){
            case "increment":
                return state+1;
            case "decrement":
                return state-1;
            default:
                return state;
        }
    }
    const [count,dispatch] = useReducer(reducer, 0);

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={()=>dispatch("increment")} style={{margin:"10px"}}>Increment Count</button>
                <button onClick={()=>dispatch("decrement")}>Decrement Count</button>
            </div>
        </div>
    );
}
export default Counter;