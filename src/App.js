import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Form from './components/Form'
import About from './components/About';
import React,{useState} from 'react';
import Alerts from './components/Alerts';

//react router
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleModeFunc = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#06284a";
      document.body.color = "white";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils - Dark mode";

      // FOR MAKING TITLE OF WEBSITE IMPRSSIVE LIKE VIRUS IN YOUR DEVICE

      // setInterval(() => {
      //   document.title = "TextUtils - Dark mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - virusssssssss";
      // }, 1700);
      
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.color = "black";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About" toggleMode = {mode} toggleModeFunc = {toggleModeFunc}/>
    <Alerts alert = {alert}/>
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Form toggleMode = {mode} showAlert={showAlert}/>

        </Route>
      </Switch>
    </Router>


    
    </>
  );
}

export default App;
