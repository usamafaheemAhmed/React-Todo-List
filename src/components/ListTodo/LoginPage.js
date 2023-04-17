import axios from "axios";
import React, { useState } from "react";
import './List.css'
import { ToastContainer, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';

const LoginPage = (props) => {
  let [myName, setMyName] = useState("");
  let [myEmail, setMyEmail] = useState("");
  let [myPass, setMyPass] = useState("");
  let [myConfirm, setMyConfirm] = useState("");
  let [SignIn, setSignIn] = useState(0);

  let [show, setShow]= useState(false);
  let [BackGround, setBackGround]= useState("success");
  let [Alert,setAlert] = useState("Task Added");

  function checkMail(data) {
    let foundUser = data.find((user) => user.email === myEmail);

    if (foundUser) {
      // alert("Email Already Exist");
      setShow(true);
      setBackGround("danger"); 
      setAlert("Email Already Exist"); 
      localStorage.setItem("email",'');
      return false;
    } else {
      let users = {
        email: myEmail,
        name: myName,
        password: myPass,
        task1: "todo List",
      };
      axios.post(`http://localhost:3000/users`, users).then((res) => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem("email",myEmail);
        // alert("logged in");
        setShow(true);
        setBackGround("success"); 
        setAlert("Your Account is Created Now Login Please"); 
        setSignIn(1);
        setMyEmail("");
        setMyPass("");

      });
    }
  }

  function checkMail2(data) {
    let foundUser = data.find((user) => user.email === myEmail);

    if (foundUser) {
      // console.log(foundUser.password)
        if(foundUser.password===myPass){
          // alert("logged in");
          localStorage.setItem("email",myEmail);
          props.onSubmit(1);
        }
        else{
          // alert("Wrong Password");
          setShow(true);
          setBackGround("danger"); 
          setAlert("Wrong Password"); 
          localStorage.setItem("email",'');
        }
      return false;
    } else {
    //  alert("Email does not exist")
    setShow(true);
    setBackGround("danger"); 
    setAlert("Email Does not exist"); 
    }
  }


  let submit = async () => {
    if (myName === "" || myEmail === "" || myPass === "" || myConfirm === "") {
      // alert("Please Enter Data in All Field");
      setShow(true);
      setBackGround("danger"); 
      setAlert("Please Enter Data in All Field"); 
    } else {
      if (myPass === myConfirm) {
        //     using axios to post Data

        await axios.get(`http://localhost:3000/users`).then((res) => {
          checkMail(res.data);
        });
      } else {
        // alert("Password Does not match with Confirm Password");
        setShow(true);
        setBackGround("danger"); 
        setAlert("Password Does not match with Confirm Password"); 
      }
    }
  };
  let submit2 = async()=>{
    if ( myEmail === "" || myPass === "") {
      // alert("Please Enter Data in All Field");
      setShow(true);
      setBackGround("danger"); 
      setAlert("Please Enter Data in All Field"); 
    } else {
      await axios.get(`http://localhost:3000/users`).then((res) => {
          // console.log(res.data);
          checkMail2(res.data);
        });
    }
  }

if(SignIn=== 0){
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="box2">
            <div className="row">
              <h4 className=" col-md-12 text-center">Sign Up</h4>

              <div className="col-md-6 mt-3">
                <label htmlFor="Name">Name</label>
                <input
                  className="form-control"
                  type="text "
                  name="Name"
                  id="Name"
                  value={myName}
                  onChange={(e) => setMyName(e.target.value)}
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
                  onChange={(e) => setMyEmail(e.target.value)}
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
                  onChange={(e) => setMyPass(e.target.value)}
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
                  onChange={(e) => setMyConfirm(e.target.value)}
                />
              </div>

              <div className="col-md-12 mt-3">
                <p>
                  If you have an account{" "}
                  <a
                    href="#"
                    onClick={() => {
                      setSignIn(1);
                    }}
                  >
                    Sign In
                  </a>
                </p>
                <button
                  type="submit"
                  className="btn btn-secondary col-md-12"
                  onClick={() => {
                    submit();
                  }}
                >
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
}
else {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="box2">
            <div className="row">
              <h4 className=" col-md-12 text-center">Sign In</h4>

              <div className="col-md-6 mt-3">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  id="email"
                  value={myEmail}
                  onChange={(e) => setMyEmail(e.target.value)}
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
                  onChange={(e) => setMyPass(e.target.value)}
                />
              </div>

              <div className="col-md-12 mt-3">
                <p>
                  If you don't have an account{" "}
                  <a
                    href="#"
                    onClick={() => {
                      setSignIn(0);
                    }}
                  >
                    Sign Up
                  </a>
                </p>
                <button
                  type="submit"
                  className="btn btn-secondary col-md-12"
                  onClick={() => {
                    submit2();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className='w-100 float-right'>




      
      <ToastContainer className='w-25 bottom-end'>

      <Toast bg={BackGround} onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">TodoList</strong>
        </Toast.Header>
        <Toast.Body className="text-light">{Alert}</Toast.Body>
      </Toast>
      </ToastContainer>
      </div>
    </div>
  );
}


};

export default LoginPage;
