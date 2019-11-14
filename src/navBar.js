import React from 'react';
import FormData from './FormData/formdata';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function  NavBar () {
    
    onSubmit = (model) => {
        model.id = +new Date()

    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    
    function Home() {
      return <h2>Home</h2>;
    }
    
    function About() {
      return <h2>About</h2>;
    }
    
    function Users() {
        return (
        <FormData
        title= "Sign Up"
        model= {[
          {key: "nameFirst", label: "First Name", type: "text", props: {required: true}},
          {key: "nameLast", label: "Last Name", type: "text", props: {required: true}},
          {key: "userName", label: "UserName", type: "text", props: {required: true}},
          {key: "age", label: "Age", type: "number"},
          {key: "email", label: "Email", type: "email", props: {required: true}},
          {key: "password", label: "Password", type: "password", props: {required: true}},
        ]}
        onSubmit = {(model) => {this.onSubmit(model)}}
      />
        )
      
    }