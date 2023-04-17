import React, {useState} from "react";
import NameChange from "./NameChange";
import Counting from "./counting";


const ConditionalRender =()=>{


    const [dateNaming, setdateNaming]= useState("Usama");
    const [shifting, setShifting]= useState(0);

    const gettingNumbers = (numberData)=>{
        console.log("Numbers got from data",numberData);
        if(numberData===11){
            setShifting(0);
            if(dateNaming==="Usama"){
                setdateNaming("Uzair Arslan!");
            }
            else{
                setdateNaming("Usama");
            }

        }

    }

    const gettingData = (data)=>{
        console.log("data is coming From chilled class",data);
        if(data==="Usama"){
            setdateNaming(data);
            setShifting(1);
        }
        else{
            setdateNaming(data);
            setShifting(1);
        }


    }


    if(shifting===0){
        return (<div className="col-md-12">
        
        <div className="row">
       {/*   <div className="col-md-6"><h4>I am {data}</h4><button className="btn btn-success" onClick={shift}>Shift</button></div>*/}
        <div className="col-md-6"><NameChange name={dateNaming} onSubmit={gettingData}/></div>
        <div className="col-md-6"></div>
        
        </div>

        
        </div>);
    }
    else{
        return (<div className="col-md-12">
        
        <div className="row">
        <div className="col-md-6"></div>
       {/*   <div className="col-md-6"></div>*/}
        <div className="col-md-6"><Counting name={dateNaming} onSubmit={gettingNumbers}/> </div>
        
        </div>

        
        </div>);
    }
   







}


export default ConditionalRender;