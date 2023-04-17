import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ScreenSize from "./components/ScreenSize";
import Githubcall from "./components/Githubcall/Githubcall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/FormFIles/Form";
// import img from "./components/images/folder-svgrepo-com.svg";
// import ClassComponent from './components/ClassComponent';
import MyForm from './components/MyForm';
import Welcome from './components/Welcome';
import Todo from "./components/Todo/Todo";
import LoginPage from "./components/Todo/LoginPage";
import List from "./components/ListTodo/List";
import NewTodo from "./components/Todo/NewTodo";

// import UsingHooksData from './components/UsingHooksData';
// import ConditionalRender from './components/condition/ConditionalRender';


function App() {


  return (
    <div className="row m-0 p-0">

    <BrowserRouter>
    <Routes>
      <Route path='/Git_call' element={<Githubcall/>} />
      <Route path='/MyForm' element={<MyForm  name="Usama Faheem Ahmed"/>} />
      <Route path='/Welcome' element={<Welcome><h3> i am Usama Faheem ahmed </h3></Welcome>} />
      <Route path='/todoList' element={<List/>} />
      <Route path='/' element={<List/>} />
      <Route path='/NewTodo' element={<NewTodo/>} />
      <Route path='/todo' element={<Todo/>} />
      <Route path='/loginPage' element={<LoginPage/>} />
      <Route path='/form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>

    

      {/*<h4 class='text-center'>Yoyo Bunny singh </h4>*/}

      {/*   <Welcome>
         <h3> i am Usama Faheem ahmed </h3>
    </Welcome>*/}

      {/*<ClassComponent />*/}
      {/*<UsingHooksData />*/}
      {/*<ConditionalRender/>*/}
      {/*-----------------------------------------------*/}
      {/*Simple form creating*/}
      {/*
      <div className="container-fluid pad">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 shadow box pb-3">
          <Form />
          </div>
          <div className="col-md-3"></div>
        </div>
       </div>*/}
      {/*-----------------------------------------------*/}

      {/*-----------------------------------------------*/}
      {/*Screen Size getting from js*/}
      {/*<ScreenSize/>*/}

      {/*-----------------------------------------------*/}

      {/*-----------------------------------------------*/}
      {/*Creating program for Github copy*/}
      {/*After complete comment*/}

      {/*-----------------------------------------------*/}

    </div>
  );
}

export default App;
