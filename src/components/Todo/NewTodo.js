import { faTrashCan, faUser } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import"./Todo.css";
const NewTodo = () => {

    let [tableRow, setTable]= useState([]);
    let [increment, setIncrement]=useState(1);
    let [Store, setStore]=useState(1);
    let [data1, setData]=useState([]);
    let [data2, setData2]=useState([]);
    
    useEffect(() => {
      let alreadyExisted = localStorage.getItem("taskList");
      if(alreadyExisted===0){
        return(false);
      }
      else{
        let fun=[];
        for (let i = 0; i < alreadyExisted; i++) {
          fun[i]={id:i+1}
          }
          console.log(fun);
          setTable(fun);
          setIncrement(fun.length+1);
          setTimeout(() => {
            fetch(alreadyExisted);
          }, 1000);
        }
    },[]);

    function fetch(alreadyExisted){
      for (let i = 1; i <= alreadyExisted; i++) {
        document.getElementById("firstTitle"+i).value=localStorage.getItem("firstTitle"+i).replaceAll("\"",'');
        document.getElementById("firstDec"+i).value=localStorage.getItem("firstDec"+i).replaceAll("\"",'');
        
        document.getElementById("firstTitle"+i).disabled=true;
        document.getElementById("firstDec"+i).disabled=true;
        }
    }

    function addRow(newRow) {
      setTable([...tableRow, newRow]);
      setIncrement(increment+1);
      // console.log(tableRow);
    }
    
    function Complete(e){

      let id = e.id-1;
      console.log(e.id)
      console.log(id)

      console.log(data1[id]);
      console.log(data2[id]);
      
      if(data2[id]===undefined||data1[id]===undefined||data1[id].firstTitle===''||data2[id].firstDec===''){
        alert('Please, Enter data in field');
      }
      else{
        document.getElementById("firstTitle"+e.id).disabled=true;
        document.getElementById("firstDec"+e.id).disabled=true;
        
        localStorage.setItem("taskList",Store);
        localStorage.setItem("firstTitle"+e.id,JSON.stringify(data1[id].firstTitle));
        localStorage.setItem("firstDec"+e.id,JSON.stringify(data2[id].firstDec));
      }


      setStore(++Store);

    }
    function Delete(e){
      let deletingId = e.id;
      setTable((current) => 
      current.filter((tableRow) => tableRow.id !== deletingId));
    }
    function DelAllRow(){
      setTable([]);
      setData2([]);
      setData([]);
      setIncrement(increment-(increment-1));
      window.localStorage.clear();
      setStore(1);
    }
    function storFirstTitle(NewTitle){
      setData([...data1, NewTitle]);
    }
    function storFirstDec(NewTitle){
      setData2([...data2, NewTitle]);
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
              <tbody id='remove'>
              {tableRow.map((tableRow) => (
                <tr key={tableRow.id}>
                  <td>{tableRow.id}</td>
                  <td><input type='text' name='title' className='form-control inputBoxes' onBlur={(e)=>storFirstTitle({firstTitle:e.target.value})} id={"firstTitle"+tableRow.id}/></td>
                  <td><input type='text' name='title' className='form-control inputBoxes' onBlur={(e)=>storFirstDec({firstDec:e.target.value})} id={"firstDec"+tableRow.id}/> </td>
                  <td><button className="btn btn-outline-success" onClick={()=>Complete(tableRow)}> Completed</button></td>
                  <td><button className='btn btn-danger'  onClick={()=>Delete(tableRow)}><FontAwesomeIcon icon={faTrashCan}/> Delete</button></td>
        
                </tr>
              ))}

              </tbody>
            </table>
            </div>
          <div className="row">
          <div className='col-md-12'>
          <p className='float-right'>Tasks already Created: {increment-1}&nbsp;</p>
          </div>
          <div className="col-md-12">
          <button className="btn btn-danger float-right " onClick={()=>DelAllRow()}> <FontAwesomeIcon icon={faMinus} className="rotate-90-cw1" /> Clear all</button>
          <button className="btn btn-outline-success float-right mr-3" onClick={()=>addRow({ id: increment})}><FontAwesomeIcon icon={faPlus} className="rotate-90-cw"/> Add</button>
          <button className="btn btn-outline-primary  mr-3"> <FontAwesomeIcon icon={faUser} className="rotate-360-cw" /> Log in</button>
          
          </div>
          </div>
        </div>

        {/*<Tablefun/>*/}



      </div>
      <div className="col-md-2"></div>
    </div>
     






  </div>
  )
}

export default NewTodo
