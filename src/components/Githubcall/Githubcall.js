import React, { useEffect, useState } from 'react'
import "./Github.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Githubcall = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setData(json));
        },[]);


  return (
    <div className='container-fluid'>
        <div className="row">
                {data.map((data)=>{
                    console.log(data);
                    return(
                        <div className='col-md-3'>
                            <div class="card" >
                                <div class="card-header">
                                    {data.username}
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">{data.name}</h4>
                                    <p class="card-text">{data.email}</p>
                                    <p class="card-text">{data.address.street} ,{data.address.city},<br/> zipCode: {data.address.zipcode} </p>
                                    <p class="card-text">{data.website}</p>
                                </div>
                                <div class="card-footer text-muted">
                                <FontAwesomeIcon icon />
                                {data.phone}
                                </div>
                            </div>


                        </div>
                    );
                    
                })}
        </div>
    </div>
  )
}

export default Githubcall
