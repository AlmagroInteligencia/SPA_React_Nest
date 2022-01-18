import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/NavBar/Navbar';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';

ReactDOM.render(
    <BrowserRouter>
        <Navbar/>
      <div className="container bg-black p-4">
          <Routes>
            <Route path="/" element={<div><TaskForm/><TaskList/></div>}/> 
            <Route path="/edit/:id" element={<div><TaskForm/><TaskList/></div>}/>
          </Routes>
         {/*} <Route path="/" component={TaskList}/>   */}
{/*           <div>
              <TaskForm/>
          </div>
          <div>
              <TaskList/>
          </div> */}
      </div>
    </BrowserRouter>,      
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
