import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav  from './Components/Nav';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import Meetings from './Components/Meetings-page';
import Testbutton from './Components/testButton';
// import { useState } from "react";


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }
function App() {
  // const token = getToken();

  // const [isExists,setExists] = useState('');
  // if(localStorage.getItem('authToken'))
  // {
  //   setExists('token exists');
  // }
  return (
    <div className="App">
      
  
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login}/>
          {/* if(!token)
          {
            <Route path="/login"><Register/></Route>
          }        */}
            <div>
            <Nav />
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/meetings' component={Meetings}/>
            {/* <span>{isExists}</span> */}
          </div>         
        </Switch>
      </Router>

      <Testbutton/>
    </div>
  );
}

export default App;
