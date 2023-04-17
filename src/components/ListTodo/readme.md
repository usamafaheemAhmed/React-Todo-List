# **Consepts i Learned in todo list task**

1. useState , UseEffect
2. localStore
3. json server
4. conditional rendring
5. react commands 
6. axios

Video Link:
https://www.awesomescreenshot.com/video/16196280?key=9ee4f0a0e4dc16eb75d3af1f256c772c


### **UseState**
Use state variable is just like a simple variable used to store data in react like given below 

    let [array,setArray] = useState([]);
    let [Task,setTask] = useState("");
    let [SignIn,setSignIn] = useState(0);
    
i used "array" to store all Tasks entered from user 
i used "Task" to store single task which will eventualy goes in array
i used "SignIn" as a state which will change everytime when user login or logout 

![image](https://user-images.githubusercontent.com/117355964/229622497-2000918d-ded6-41d5-9e4a-af2abdbfd8ba.png)

### **UseEffect**

Use effect hook is a Hook which will run every time when window loads just like window.load function in JS in this Project this
hook is getting all the previusly stored tasks by user in db. 

### **Local store**

![image](https://user-images.githubusercontent.com/117355964/229623252-45294e47-9e5f-4c15-9dfd-a482f1ae6c28.png)

once User login or Sign up i am storing data in local store which will later own helpping to get tall task of that perticuler user. i am storing only email since
i only need email to find all the tasks in "Task" Table against that email.


### **Json Server**
it is just like a Data base which but it is not a database we run this server on another application or Project parrallel to this application in my project
i ran json server on **localhost:3000** and react app on **localhost:3001** 

![image](https://user-images.githubusercontent.com/117355964/229625933-25541aa5-2226-4f12-8b82-23cadad7ef14.png)

to create table in json server we just need to inisiate curly braket { table name "Users" then big braket [ and then fields with sample data] then just close curly braket

commands to create and run this project
**Create** 
npm init

npm i jsone-server

then go in package.jsone file and edit script tage

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "json:server" : "json-server --watch db.json"
  },
  
  ![image](https://user-images.githubusercontent.com/117355964/229627073-5c43d100-56af-4988-a55d-800291fd0080.png)
  
  then create a db.json file after and start creating table like show above  
  then just run "npm run json:server"
  

### **conditional rendring**

in this i am using componet of login when a user comes on project "**localhost:3001/todolist**" he/she have to login or Sign Up first once they done that a
input field with add + and delete button will apear and previusly stored tasks if any. 
after that submit and logout button help them to logout ther account

![image](https://user-images.githubusercontent.com/117355964/229628617-528d6fc4-d132-4750-acb4-fc8d7120f140.png)

### **React commands**

i used react, useState, useEffect,  fontawsome, axios  and  tooltip
useState and UseEffect comes with react but for fontawsome we will use
#### **npm i font-awesome** 

for axios **npm i axios**

first import axios like this 
import axios from 'axios'


How to use get axios 
 await axios.get(`http://localhost:3000/users`).then((res) => {
          console.log(res.data);
        });


How to use post axios
   axios.post(`http://localhost:3000/users`, users).then((res) => {
        console.log(res);
        console.log(res.data);
      });
      
How to use patch axios
 axios.patch(`http://localhost:3000/Task/${unique.id}`, Task).then((res) => {
          console.log(res);
          console.log(res.data);
          alert("Tasks are Updated");
        });
        

for tooltip **npm i react-tooltip**

to use this wee need to import
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

in jsx we will use it like this "<tag className ="Para" data-tooltip-id="my-tooltip" data-tooltip-content="Add New Task"> I am usama </tag>"
then we will use   "<Tooltip anchorSelect=".Class Name"/>"
