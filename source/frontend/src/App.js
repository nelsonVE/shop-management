import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Login from "./components/Login"
import EmployeeList from "./components/EmployeeList"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import { AuthProvider } from './contexts'


class App extends Component{
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/login" component={ Login }/>
            <Route path="/employee/list" component={ EmployeeList }/>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
