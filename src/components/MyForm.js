import React, {useState} from "react";


const MyForm = (props) => {
     const[firstName, setFirstName]= useState("Usama Faheem ahmed");
     const[nameUpdate, setNameUpdate]= useState(1);

    // let nameUpdate = 1;
     let nameHandler=()=>{
          if(nameUpdate===1){
            setFirstName("Uzair");
            setNameUpdate(0);
            console.log(nameUpdate);

          }
          else{
            setFirstName("Usama Faheem Ahmed");
            setNameUpdate(1);
            console.log(nameUpdate);
          }
     }


    //  console.log(props.name);

  return (
    <div>
    <h3 className="text-center">Your Name is: {firstName} </h3>
    <h3 className="text-center">Your Name from Props: {props.name} </h3>

    <button type="btn"  className="btn btn-danger" onClick={nameHandler}>btn</button>

      
    </div>
  )
}

export default MyForm
