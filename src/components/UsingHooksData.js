import React, { useState } from "react";
// import React from "react";

const UsingHooksData =()=>{
    const [count, setCount] = useState(0);
    const dataCount =()=>{
        setCount(count+1);
    }
    return( 
        // <h1>usama</h1>
        <div className="bg-info text-center col-md-12 pb-2 mt-4">
            <h4>I am Usama Now add one:{count}</h4>
            <button type="click" className="btn btn-warning" onClick={dataCount}>Increment</button>
        </div>
    )
}

export default UsingHooksData