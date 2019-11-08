import React from 'react';
import FormData from './FormData/formdata';
import './App.css';

export default class App extends React.Component {

  state = {
    data: [
    {
    id: "1",
    nameFirst: "Kayden", 
    nameLast: "Clark", 
    userName: "KaydenClark725", 
    age: 19, 
    email: "kaydenclark725@gmail.com", 
    password: "passWord123"},
    ]
  }

  onSubmit = (model) => {
    model.id = +new Date()
    alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.state.data]
    })
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
        onSubmit = {(model) => {this.onSubmit(model)}}
      />
      <pre>
        {JSON.stringify(this.state.data)}
      </pre>

    </div>
  );
};
}