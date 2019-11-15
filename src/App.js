import React from 'react';
import FormData from './FormData/formdata';
import './App.css';

export default class App extends React.Component {



  
  // alert(JSON.stringify(model));
 state ={
   data: []
 }

 onSubmit = (model) => {
   alert(JSON.stringify(model))
 }

render () {

  return (
    <div>
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
        onSubmit = {(model) => {this.onSubmit(model)}} />
      
    </div>
  );
};
}