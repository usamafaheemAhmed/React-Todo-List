import React, { useEffect, useState } from 'react'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCheck, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons'
import LoginPage from './LoginPage'
import axios from 'axios'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Toast from 'react-bootstrap/Toast';
import { ToastContainer,ToggleButton} from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import date from 'date-and-time';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = () => {
    let [array,setArray] = useState([]);
    let [Task,setTask] = useState("");
    let [Alert,setAlert] = useState("Task Added");
    let [SignIn,setSignIn] = useState(0);
    let [show, setShow]= useState(false);
    let [BackGround, setBackGround]= useState("success");


    let mark=0;
    useEffect(() => {
      let email = localStorage.getItem("email");
      if(email==''||email==undefined){
      }
      else{
        if(mark==0){
          setSignIn(1);
          axios.get(`http://localhost:3000/Task`).then((res) => {
            console.log(res.data)
          PreviousTasks(res.data,email)
          setShow(true);
          setBackGround("success");

          // setArray(res.data);
          });
          mark=1;
        }
      }
    },[]);
    function  PreviousTasks(data,Email){
      let foundUser = data.find((user) => user.loggedInEmail === Email);
      if(foundUser===''||foundUser===undefined){
        setAlert("Welcome "+Email+" your Task List is Empty");
      }
      else{
        // console.log("todoList console",foundUser.AllTask);
        foundUser.AllTask.map(element => {
    
           setArray(array =>[...array, element]);

        });
        setAlert("Welcome "+Email+" your Previous task are following...");
      }
    }
    function TaskAdding(newRow){
      let dates= new Date();
      dates = date.format(dates, 'ddd, MMM-DD-YYYY HH:mm:ss'); 
      newRow.date= dates;

      if(newRow.task===""){
        setShow(true);
        setBackGround("danger"); 
        setAlert("You can not add empty task"); 
      }
      else{
        setTask("");
        console.log(newRow);
        setArray([...array, newRow]);
        setShow(true);
        setBackGround("success");  
        setAlert("Your task is added"); 
      }
    }
    function enterAdd(event){
      if(event==13){

        let dates= new Date();
        dates = date.format(dates, 'ddd, MMM-DD-YYYY HH:mm:ss'); 


        TaskAdding({id:array.length,task:Task,Status:"progress",date:dates,priority:"low"});
        setShow(true);
        setBackGround("success");
        setAlert("Your task is added");
      }
    }
    function remove(e){
      let deletingId = e.id;
      // console.log(e.Name);
      setArray((current) => 
      current.filter((array) => array.id !== deletingId));
      setShow(true);
      setBackGround("danger");
      setAlert("Your Task is removed");
    }
    function Complete(e){
      // // console.log(e);
      let singleData = e ;
      setArray((current) => 
      current.filter((array) => array.id !== e.id));

      singleData.Status="complete";
      let dates= new Date();
      dates = date.format(dates, 'ddd, MMM-DD-YYYY HH:mm:ss'); 
      singleData.date=dates;
      console.log("singleData",singleData);

      setArray(array=>[...array, singleData]);
      saveData();
    }
    function prioritySettingLow(e){
      let singleData = e ;
      setArray((current) => 
      current.filter((array) => array.id !== e.id));
 
      singleData.priority='low';

      setArray(array=>[...array, singleData]);
      setArray(array.sort((a, b) => (a.id > b.id) ? 1 : -1));

    }
    function prioritySettingHigh(e){
            let singleData = e ;
      setArray((current) => 
      current.filter((array) => array.id !== e.id));
 
      singleData.priority='high';
      
      setArray(array=>[...array, singleData]);
      setArray(array.sort((a, b) => (a.id > b.id) ? 1 : -1));
    }
    function prioritySettingUrgent(e){
      let singleData = e ;
      setArray((current) => 
      current.filter((array) => array.id !== e.id));
 
      singleData.priority='urgent';
      
      setArray(array=>[...array, singleData]);
      setArray(array.sort((a, b) => (a.id > b.id) ? 1 : -1));
    }
    function Progress(e){
      // console.log(e);
      let singleData = e ;
      setArray((current) => 
      current.filter((array) => array.id !== e.id));

      singleData.Status="progress";
      let dates= new Date();
      dates = date.format(dates, 'ddd, MMM-DD-YYYY HH:mm:ss'); 
      singleData.date=dates;
      // console.log("singleData",singleData);

      setArray(array=>[...array, singleData]);
    }
    function clearAll(){
      setArray([]);
      setShow(true);
      setBackGround("danger");
      setAlert("All Tasks are removed");
    }
    const gettingData = (data)=>{
      // console.log("data is coming From Sign Page class",data);
      setSignIn(data);
      setShow(true);
      setBackGround("success");
      setAlert("You are Logged in");
   }

   let saveData = async()=>{
      let Email = localStorage.getItem("email");
      let foundData=  
     await axios.get(`http://localhost:3000/Task`).then((res) => {
        return(res.data);
      });
      // console.log(foundData);
      
      let isThere = foundData.find((user) => user.loggedInEmail === Email);
      
      // console.log(isThere);

      let Task = {
        loggedInEmail: Email,
        AllTask: array
      }
      
      if(isThere){
        axios.patch(`http://localhost:3000/Task/${isThere.id}`, Task).then((res) => {
          console.log(res);
          console.log(res.data);
          // alert("Tasks are Updated");
          setShow(true);
          setBackGround("success");
          setAlert("All Tasks are Updated in DataBase");
        });
      }
      else{
        axios.post(`http://localhost:3000/Task`, Task).then((res) => {
          console.log(res);
          console.log(res.data);
          // alert("Tasks are saved");
          setShow(true);
          setBackGround("success");
          setAlert("All Tasks are stored in DataBase");
        });

      }






      
      
      
      
   }



if(SignIn === 0){
  return(
    <div className='col-md-12'>
    <LoginPage onSubmit={gettingData} />
    </div>
  );
}
else{

  return (
    
    <div className='ListBox'>
    <div className='firstListBox row px-3 py-1 m-2'>
      <div className="input-group">
                  <input type="text" className="form-control task" placeholder="Recipient's Task" value={Task} onChange={(e)=>{setTask(e.target.value)}}  onKeyDown={(e)=>{enterAdd(e.keyCode)}}  />
                  <div className="input-group-append">
                      <span className="input-group-text addTask"  id="basic-addon2">
                      <FontAwesomeIcon icon={faAdd} className='rotate-90-cw  border-0' align='left' data-tooltip-id="my-tooltip" data-tooltip-content="Add New Task" onClick={()=>{TaskAdding({id:array.length,task:Task,Status:"progress",date:"",priority:"low"})}}/>
                       <FontAwesomeIcon icon={faTrashCan} className='rotate-360-cw ml-3 float-end mx-3 text-danger' data-tooltip-id="my-tooltip" data-tooltip-content="Remove all Tasks" onClick={()=>{clearAll()}}/></span>
                  </div> 
              </div>
              <Tooltip anchorSelect=".rotate-90-cw"/>
              <Tooltip anchorSelect=".rotate-360-cw"/>
      </div>
      <div className='firstListBox row px-2 py-1  m-2'>
      <div className='col-md-12 p-0'>
        <h5 className='text-center'>Tasks List</h5>
          <dl>
          {array.map((array) =>{
            if(array.Status==="progress"){
              
              return(
                <dt>
                <div className='col-md-12 scale-in-center' id={array.id}> 
                <p> {array.task}
                                
              <FontAwesomeIcon icon={faTrashCan} onClick={()=>{remove(array)}} className=' mt-2  float-end remove'  data-tooltip-id="my-tooltip" data-tooltip-content="Remove This Task" ></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCheck} onClick={()=>{Complete(array)}} className='mt-2 float-end mx-2 add' data-tooltip-id="my-tooltip" data-tooltip-content="Complete task"></FontAwesomeIcon>
              
              <ToggleButtonGroup className='float-end' type="radio" name={"options"+array.id}  defaultValue={array.priority}>
                <ToggleButton variant='outline-success' id={"low"+array.id} onClick={()=>{prioritySettingLow(array)}} value="low">
                  low
                </ToggleButton>
                <ToggleButton id={"high"+array.id} variant='outline-secondary' onClick={()=>{prioritySettingHigh(array)}}  value="high">
                  high
                </ToggleButton>
                <ToggleButton id={"urgent"+array.id} variant='outline-danger' onClick={()=>{prioritySettingUrgent(array)}}  value="urgent">
                  Urgent 
                </ToggleButton>
              </ToggleButtonGroup>
              
              <span className='float-end mt-1 mx-3 date' data-tooltip-id="my-tooltip" data-tooltip-content="Date When Task is added">{array.date}</span>

                 </p>
                <Tooltip anchorSelect=".remove"/>
                <Tooltip anchorSelect=".add"/>
                <Tooltip anchorSelect=".date"/>

              
                </div>
                </dt>
                );
            }
            })}
            </dl>

          </div>
        </div>

        <div className='firstListBox row px-2 py-1  m-2'>
        <div className='col-md-12 p-0'>
        <h5 className='text-center'>Completed Tasks List</h5>
            <dl className='text-success'>
            {array.map((array) =>{
              if(array.Status === "complete"){

                return(
                  <dt>
                  <div className='col-md-12 scale-in-center' id={array.id}> 
                  <p>{array.task} 
                  <span className=' mx-3 Cdate' data-tooltip-id="my-tooltip" data-tooltip-content="Task Completion date">{array.date}</span>
                  <FontAwesomeIcon icon={faXmark} onClick={()=>{Progress(array)}} className=' mt-1 float-end mx-2 notCompleted' data-tooltip-id="my-tooltip" data-tooltip-content="Not Completed Task"></FontAwesomeIcon> 
                  </p>
                  <Tooltip anchorSelect=".notCompleted"/>
                  <Tooltip anchorSelect=".Cdate"/>
                  </div>
                  </dt>
                  );
                }
              })}
              </dl>
  
            </div>
          </div>
          <button type="button" className="btn btn-outline-primary w-25 mb-3" onClick={()=>{saveData()}}> Save</button>
          <button type="button" className="btn btn-outline-primary w-25" onClick={()=>{localStorage.clear();setSignIn(0);setShow(true); setBackGround("danger"); setAlert("Logout"); }}> logout</button>
          





          <div className='w-100 '>
 
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
  )
}


}

export default List
