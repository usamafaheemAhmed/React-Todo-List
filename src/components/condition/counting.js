import React, {useState} from "react";



const Counting =(props)=>{


    const [number, setNumber]= useState(0);

    const AddNumber= ()=>{
        setNumber(number+1);
    }
    const completeFrom= (e)=>{
        e.preventDefault();
        if(number=== 11){
            props.onSubmit(number);
            setNumber(0);
        }
    }
        return (
            <div className="col-md-12 p-0 m-0">
            <h3>your name is: {props.name} and your form number is: {number}</h3>
            <form onSubmit={completeFrom}>
                
            <button className="btn btn-success" onClick={AddNumber}>+ Add</button>
            </form>
            </div>
                
            );

   

}


export default Counting;