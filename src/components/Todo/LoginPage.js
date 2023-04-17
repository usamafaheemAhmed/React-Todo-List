import React, { useState } from "react";

const LoginPage = () => {
  let[myName,setMyName]=useState("");
  let[myEmail,setMyEmail]=useState("");
  let[myPass,setMyPass]=useState("");
  let[myConfirm,setMyConfirm]=useState("");


  let submit = ()=>{

    if (myName===""||myEmail===""){
      alert("Please Enter Name or Email");
    }
    else{
      
     localStorage.setItem("myName",myName);
     localStorage.setItem("myEmail",myEmail);
     localStorage.setItem("login",0);
    }
  }



  return (
    <div className="container-fluid">
    
      <div className="row mt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="box2">
            <div className="row">
              <h4 className=" col-md-12 text-center">Sign In</h4>
              <div className="col-md-6 mt-3">
                <label htmlFor="Name">Name</label>
                <input
                  className="form-control"
                  type="text "
                  name="Name"
                  id="Name"
                  value={myName}
                  onChange={(e)=>setMyName(e.target.value)}

                />
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  id="email"
                  value={myEmail}
                  onChange={(e)=>setMyEmail(e.target.value)}
                />
              </div>

              <div className="col-md-6 mt-3">
                <label htmlFor="phone">Password</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  id="phone"
                  value={myPass}
                  onChange={(e)=>setMyPass(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="address">Confirm Password</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  id="address"
                  value={myConfirm}
                  onChange={(e)=>setMyConfirm(e.target.value)}
                />
              </div>

              <div className="col-md-12 mt-3">
                <button type="submit" className="btn btn-secondary col-md-12">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;
