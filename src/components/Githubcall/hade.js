import React, { useEffect, useState } from 'react'
import "./Github.css"
// import img from "../images/usamaphoto.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

const Githubcall = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // // fetch(`https://api.github.com/users/${name}`)
        // fetch(`https://jsonplaceholder.typicode.com/users`)
        // .then((response)=>response.json().then(data=>{
        //     console.log(data)
        //     document.getElementById('name').innerHTML=data[0].name;
        //     document.getElementById('bio').innerHTML=data[0].address.city+","+data[0].address.street;
        //     document.getElementById('company').innerHTML=data[0].company.name ;
        //     document.getElementById('following').innerHTML=data[0].following ;
        //     // document.getElementById('profile').innerHTML=`<img src="${data[0].avatar_url}"   class="rounded"  />`
        // }))


        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setData(json));
        });


//   return (
//     <div className='container-fluid'>
//         <div className="row">
//             <div className='col-md-12'>
//             <div className='box mt-3'>
//                     {/*  <div className='text-center' id='profile'><img src={img} className="rounded" alt="data"/></div>*/}
//                     <div className='text-center' id='profile'><FontAwesomeIcon icon="fa-light fa-circle-user" /></div>
//                     <p className='text-center px-4' id='name'>Usama Faheem Ahmed</p>
//                     <p className='px-4' >Company Name: <span className='float-right' id='company'>23</span></p>
//                     <p className='px-4'>Following: <span className='float-right' id='following'>23</span></p>
//                     <p className='text-align-left px-4' id='bio'>I am a Front-end Developer. I have worked with JavaScript, laravel and React</p>
//                     <button type="submit" className='btn btn-primary ml-4 mb-3'><a>View</a></button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
}

export default Githubcall
