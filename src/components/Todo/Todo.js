import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
// import Tablefun from "./Tablefun";
import "./Todo.css";

// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Todo() {

  const [AddTitle, setAddTitle] = useState([]);
  const [AddDes, setAddDes,] = useState([]);
  let [rowID, setRowID] = useState(1);
  // let [taskLimit, setTaskLimit] = useState(10);

  useEffect(() => {
 
    let alreadyExisted = localStorage.getItem("taskList");
    if(alreadyExisted===0){
      return(false);
    }
    else {
      for (let i = 1; i <= alreadyExisted; i++) {
        let isFilled =document.getElementById("row"+i);
        if (isFilled == "") {
          console.log("error");
          // console.log(isFilled);
          break;
        } else {
          // console.log(isFilled);
          console.log("no error and UseEffect is done");
          isFilled.classList.remove("d-none");

          document.getElementById("firstTitle"+i).value=localStorage.getItem("Title"+i).replaceAll("\"",'');
          document.getElementById("firstDec"+i).value=localStorage.getItem("Dec"+i).replaceAll("\"",'');
          
          document.getElementById("firstTitle"+i).disabled=true;
          document.getElementById("firstDec"+i).disabled=true;

        }
      }
    }
    
 
  },[]);


  let navigate = useNavigate();
  
  let loginPage = ()=>{
    navigate('/loginPage');
  }

  let stor1 = ()=>{

    let loggedIn = localStorage.getItem("login");
    if (loggedIn == 0){

   

    let title = document.getElementById("firstTitle1");
    let description = document.getElementById("firstDec1");

      setAddTitle(title.value);
      setAddDes(description.value);
      title.disabled = true;
      description.disabled = true;

    localStorage.setItem("taskList",1);
    localStorage.setItem("Title1",JSON.stringify(title.value));
    localStorage.setItem("Dec1",JSON.stringify(description.value));

  }

  }
  let stor2 = ()=>{
    let title = document.getElementById("firstTitle2");
    let description = document.getElementById("firstDec2");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",2);
    localStorage.setItem("Title2",JSON.stringify(title.value));
    localStorage.setItem("Dec2",JSON.stringify(description.value));
  }
  let stor3 = ()=>{
    let title = document.getElementById("firstTitle3");
    let description = document.getElementById("firstDec3");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",3);
    localStorage.setItem("Title3",JSON.stringify(title.value));
    localStorage.setItem("Dec3",JSON.stringify(description.value));
  }
  let stor4 = ()=>{
    let title = document.getElementById("firstTitle4");
    let description = document.getElementById("firstDec4");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",4);
    localStorage.setItem("Title4",JSON.stringify(title.value));
    localStorage.setItem("Dec4",JSON.stringify(description.value));
  }
  let stor5 = ()=>{
    let title = document.getElementById("firstTitle5");
    let description = document.getElementById("firstDec5");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",5);
    localStorage.setItem("Title5",JSON.stringify(title.value));
    localStorage.setItem("Dec5",JSON.stringify(description.value));
  }
  let stor6 = ()=>{
    let title = document.getElementById("firstTitle6");
    let description = document.getElementById("firstDec6");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",6);
    localStorage.setItem("Title6",JSON.stringify(title.value));
    localStorage.setItem("Dec6",JSON.stringify(description.value));
  }
  let stor7 = ()=>{
    let title = document.getElementById("firstTitle7");
    let description = document.getElementById("firstDec7");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",7);
    localStorage.setItem("Title7",JSON.stringify(title.value));
    localStorage.setItem("Dec7",JSON.stringify(description.value));
  }
  let stor8 = ()=>{
    let title = document.getElementById("firstTitle8");
    let description = document.getElementById("firstDec8");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",8);
    localStorage.setItem("Title8",JSON.stringify(title.value));
    localStorage.setItem("Dec8",JSON.stringify(description.value));
  }
  let stor9 = ()=>{
    let title = document.getElementById("firstTitle9");
    let description = document.getElementById("firstDec9");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",9);
    localStorage.setItem("Title9",JSON.stringify(title.value));
    localStorage.setItem("Dec9",JSON.stringify(description.value));
  }
  let stor10 = ()=>{
    let title = document.getElementById("firstTitle10");
    let description = document.getElementById("firstDec10");
    setAddTitle(title.value);
    setAddDes(description.value);
    title.disabled = true;
    description.disabled = true;
    localStorage.setItem("taskList",10);
    localStorage.setItem("Title10",JSON.stringify(title.value));
    localStorage.setItem("Dec10",JSON.stringify(description.value));
  }

  let addNewRow = ()=>{
    if(rowID===1){
      document.getElementById("row1").classList.remove("d-none");
      setRowID(2);
    }
   else if(rowID===2){
      document.getElementById("row2").classList.remove("d-none");
      setRowID(3);
    }
    else if(rowID===3){
      document.getElementById("row3").classList.remove("d-none");
      setRowID(4);
    }
    else if(rowID===4){
      document.getElementById("row4").classList.remove("d-none");
      setRowID(5);
    }
    else if(rowID===5){
      document.getElementById("row5").classList.remove("d-none");
      setRowID(6);
    }
    else if(rowID===6){
      document.getElementById("row6").classList.remove("d-none");
      setRowID(7);
    }
    else if(rowID===7){
      document.getElementById("row7").classList.remove("d-none");
      setRowID(8);
    }
    else if(rowID===8){
      document.getElementById("row8").classList.remove("d-none");
      setRowID(9);
    }
    else if(rowID===9){
      document.getElementById("row9").classList.remove("d-none");
      setRowID(10);
    }
    else if(rowID===10){
      document.getElementById("row10").classList.remove("d-none");
      setRowID(11);
    }
  }

    const removeRow1 = ()=>{
      document.getElementById("row1").classList.add("d-none");
      setRowID(rowID-1);
    
      let title = document.getElementById("firstTitle1");
      let description = document.getElementById("firstDec1");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title1");
      localStorage.removeItem("Dec1");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
      
    }
    const removeRow2 = ()=>{
      document.getElementById("row2").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle2");
      let description = document.getElementById("firstDec2");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title2");
      localStorage.removeItem("Dec2");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }
    const removeRow3 = ()=>{
      document.getElementById("row3").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle3");
      let description = document.getElementById("firstDec3");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title3");
      localStorage.removeItem("Dec3");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }
    const removeRow4 = ()=>{
      document.getElementById("row4").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle4");
      let description = document.getElementById("firstDec4");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title4");
      localStorage.removeItem("Dec4");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }
    const removeRow5 = ()=>{
      document.getElementById("row5").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle5");
      let description = document.getElementById("firstDec5");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title5");
      localStorage.removeItem("Dec5");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }
    const removeRow6 = ()=>{
      document.getElementById("row6").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle6");
      let description = document.getElementById("firstDec6");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title6");
      localStorage.removeItem("Dec6");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }
    const removeRow7 = ()=>{
      document.getElementById("row7").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle7");
      let description = document.getElementById("firstDec7");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title7");
      localStorage.removeItem("Dec7");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }
    const removeRow8 = ()=>{
      document.getElementById("row8").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle8");
      let description = document.getElementById("firstDec8");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title8");
      localStorage.removeItem("Dec8");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }
    const removeRow9 = ()=>{
      document.getElementById("row9").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle9");
      let description = document.getElementById("firstDec9");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title9");
      localStorage.removeItem("Dec9");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }
    const removeRow10 = ()=>{
      document.getElementById("row10").classList.add("d-none");
      setRowID(rowID-1);
      let title = document.getElementById("firstTitle10");
      let description = document.getElementById("firstDec10");
      title.disabled = false;
      description.disabled = false;
      title.value = '';
      description.value = '';
      localStorage.removeItem("Title10");
      localStorage.removeItem("Dec10");
      localStorage.setItem('taskList',localStorage.getItem("taskList")-1);
    }


    const clearAll = ()=>{
      document.getElementById("row10").classList.add("d-none");
      document.getElementById("row9").classList.add("d-none");
      document.getElementById("row8").classList.add("d-none");
      document.getElementById("row7").classList.add("d-none");
      document.getElementById("row6").classList.add("d-none");
      document.getElementById("row5").classList.add("d-none");
      document.getElementById("row4").classList.add("d-none");
      document.getElementById("row3").classList.add("d-none");
      document.getElementById("row2").classList.add("d-none");
      document.getElementById("row1").classList.add("d-none");
      setRowID(1);
      window.localStorage.clear();
    }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 mt-3">
          <h4 className="text-center">Welcome to Todo List</h4>
          <div className="todoBox p-4 ">
                <div className="table-responsive">
                  
                
              <table className="table table-bordered tabBordered">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Task Title</th>
                    <th>Task description</th>
                    <th colSpan={2}>Action</th>
                  

                  </tr>
                </thead>
                <tbody id="table">
                  <tr className="d-none"  id='row1'>
                    <th scope="row">1</th>
                    <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle1"/></td>
                    <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec1"/> </td>
                    <td><button className="btn btn-outline-success" onClick={stor1}>Completed</button></td>
                    <td><button type="type" className='btn btn-danger' id="1" onClick={removeRow1}>Delete</button></td>
          
                  </tr>
                    <tr className="d-none"  id='row2'>
                    <th scope="row">2</th>
                    <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle2" /></td>
                    <td><input type='text' name='title' className='form-control inputBoxes'  id="firstDec2"/> </td>
                    <td><button className="btn btn-outline-success" onClick={stor2}>Completed</button></td>
                    <td><button type="type" className='btn btn-danger' id="2" onClick={removeRow2}>Delete</button></td>
          
                  </tr>
                  <tr className="d-none"  id='row3'>
                  <th scope="row">3</th>
                  <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle3"/></td>
                  <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec3"/> </td>
                  <td><button className="btn btn-outline-success" onClick={stor3}>Completed</button></td>
                  <td><button type="type" className='btn btn-danger' id="3" onClick={removeRow3}>Delete</button></td>
        
                </tr>
                    <tr className="d-none"  id='row4'>
                    <th scope="row">4</th>
                    <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle4"/></td>
                    <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec4"/> </td>
                    <td><button className="btn btn-outline-success" onClick={stor4}>Completed</button></td>
                    <td><button type="type" className='btn btn-danger' id="4" onClick={removeRow4}>Delete</button></td>
          
                  </tr>
                  <tr className="d-none"  id='row5'>
                  <th scope="row">5</th>
                  <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle5"/></td>
                  <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec5"/> </td>
                  <td><button className="btn btn-outline-success" onClick={stor5}>Completed</button></td>
                  <td><button type="type" className='btn btn-danger' id="5" onClick={removeRow5}>Delete</button></td>
        
                </tr>
                <tr className="d-none"  id='row6'>
                <th scope="row">6</th>
                <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle6"/></td>
                <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec6"/> </td>
                <td><button className="btn btn-outline-success" onClick={stor6}>Completed</button></td>
                <td><button type="type" className='btn btn-danger' id="6" onClick={removeRow6}>Delete</button></td>
      
              </tr>
                <tr className="d-none"   id='row7'>
                <th scope="row">7</th>
                <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle7"/></td>
                <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec7"/> </td>
                <td><button className="btn btn-outline-success" onClick={stor7}>Completed</button></td>
                <td><button type="type" className='btn btn-danger' id="7" onClick={removeRow7}>Delete</button></td>
      
              </tr>
              <tr className="d-none" id='row8'>
              <th scope="row">8</th>
              <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle8"/></td>
              <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec8"/> </td>
              <td><button className="btn btn-outline-success" onClick={stor8}>Completed</button></td>
              <td><button type="type" className='btn btn-danger' id="8" onClick={removeRow8}>Delete</button></td>
    
            </tr>
            <tr className="d-none" id='row9'>
            <th scope="row">9</th>
            <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle9"/></td>
            <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec9"/> </td>
            <td><button className="btn btn-outline-success" onClick={stor9}>Completed</button></td>
            <td><button type="type" className='btn btn-danger' id="9" onClick={removeRow9}>Delete</button></td>
  
          </tr>
          <tr className="d-none" id='row10'>
          <th scope="row">10</th>
          <td><input type='text' name='title' className='form-control inputBoxes' id="firstTitle10"/></td>
          <td><input type='text' name='title' className='form-control inputBoxes' id="firstDec10"/> </td>
          <td><button className="btn btn-outline-success" onClick={stor10}>Completed</button></td>
          <td><button type="type" className='btn btn-danger' id="10" onClick={removeRow10}>Delete</button></td>

        </tr>
          

                </tbody>
              </table>
              </div>
            <div className="row">
            <div className="col-md-12">
            <button className="btn btn-danger float-right " onClick={clearAll}><i className="fa-solid fa-minus rotate-90-cw1" ></i> Clear all</button>
            <button className="btn btn-outline-success float-right mr-3" onClick={addNewRow}><i className="fa-solid fa-plus rotate-90-cw"></i> Add</button>
            <button className="btn btn-outline-primary  mr-3" onClick={loginPage}><i className="fa-solid fa-user rotate-360-cw"></i> Log in</button>
            
            </div>
            </div>
          </div>

          {/*<Tablefun/>*/}



        </div>
        <div className="col-md-2"></div>
      </div>
       






    </div>
  );
}




export default Todo;
