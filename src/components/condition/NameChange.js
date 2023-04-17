import React, {useState} from "react";



const NameChange = (props)=>{


    const [changeName, setChangeName]= useState(props.name);
    // const [changeIndex, setChangeIndex]= useState(0);
    // const [number, setNumber]= useState(0);

    const Send =(e)=>{
        e.preventDefault();
        props.onSubmit(changeName);
        if(changeName==="Usama"){
           
            setChangeName("Uzair");
        }
        else{
            
            setChangeName("Usama");
        }
    }
  
    // const shift=()=>{
    //     if(changeName==="Usama"){
           
    //         setChangeName("Uzair");
    //     }
    //     else{
            
    //         setChangeName("Usama");
    //     }
    // }
        return (
            <div className="col-md-12 p-0 m-0">
            <h2>i am {changeName}</h2>
            <form onSubmit={Send}>
            {/*<button className="btn btn-success" onClick={shift}>Shift</button>*/} 
            <button className="btn btn-success">Shift</button> 
            {/*<button type="submit" className="btn btn-success ml-5" onClick={Send}>Send</button>*/}
            </form>
            </div>
        );
  
}


export default NameChange;