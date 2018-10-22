import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
// import Login from './pages/Login';
import Login from './components/login/login'
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import NewUser from './pages/NewUser';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Switch>
              <Wrapper>
                <Navbar/>
                <Route exact path ='/'component ={Login}/>
                <Route exact path ='/home' component ={Home}/>
                <Route exact path ='/search' component ={Search}/>
                <Route exact path ='/NewUser'component ={NewUser}/>
              </Wrapper>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
