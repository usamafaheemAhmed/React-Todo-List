import React, { useEffect, useState } from 'react'
import "./Form.css"

function Form() {

    const store =()=>{
        let age = document.getElementById("age2").value;
        document.getElementById("age").value = age;
    }

    let [jan,setjan]=useState();

    let janUpdate=()=>{
     let phone= document.getElementById("phone").value;
     setjan(phone);
    }

    useEffect(() => {
        //    add your function
        
        },[])


  return (
    <div className='col-md-12'>
        <div className='row'>
        <h4 className=' col-md-12 text-center'>Sign In</h4>
            <div className='col-md-6 mt-3'>
               <label htmlFor="Name">Name</label>
               <input  className='form-control' type="text" name="Name" id='Name'/> 
            </div>
            <div className='col-md-6 mt-3'>
            <label htmlFor="email">Email</label>
            <input  className='form-control' type="text" name="email" id='email'/> 
            </div>
        
            <div className='col-md-6 mt-3'>
            <label htmlFor="phone">Phone</label>
            <input  className='form-control' type="number" name="phone" id='phone' onChange={janUpdate}/> 
         </div>
         <div className='col-md-6 mt-3'>
         <label htmlFor="address">Address</label>
         <input  className='form-control' type="text" name="address" id='address'/> 
         </div>

         <div className='col-md-6 mt-3'>
         <label htmlFor="Gender"> Gender</label> <br/>

         <div className="form-check form-check-inline">
         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
         <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
       </div>
       <div className="form-check form-check-inline">
         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
         <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
       </div>
         </div>

         <div className='col-md-6 mt-3'>
         <label htmlFor="age">Age</label>
         <input  className='form-control float-right' type="text" name="age" id='age' defaultValue={0}/> 
         
         <input type="range" name="age1" id='age2' min={10} max={80} onChange={store}/> 
         </div>

         <div className='col-md-12'>
            <button type="submit" className='btn btn-secondary col-md-12'>Submit</button>
         </div>

        </div>
        <div className="row">
          {/*
          //   for(let i=1;i>jan;i++){

          //     return(
          //       <div>
          //       <input type="text" className='form-control' value="Usama" id='Usama' />
          //       </div>
          //     );

          //   }
          */}
          {/*
          {jan
            ? <h2>i am usama <input type="text" className='form-control' />  </h2>
            : <h3>i am ali </h3>
          } */}
        </div>
    </div>
  )
}

export default Form
