import React from 'react';
import formdata from './FormData/formdata';
import './App.css';
// import { ReactComponent } from '*.svg';

function App() {
// class App extends React.Component {

// render () {
//   state = {
//     data: [
//       {nameFirst: "Kayden", nameLast: "Clark", userName: "KaydenClark725", age: 19, email: "kaydenclark725@gmail.com", password: "passWord123"},
//       {nameFirst: "Kayden", nameLast: "Clark", userName: "KaydenClark725", age: 19, email: "kaydenclark725@gmail.com", password: "passWord123"},
//     ]
//   };
// this.setState({
//   data: [model, ...data],
// })

  return (
    <div>
      <form
        title= "Sign Up"
        model= {[
          {key: "nameFirst", lable: "First Name", type: "text", props: {required: true}},
          {key: "nameLast", lable: "Last Name", type: "text", props: {required: true}},
          {key: "userName", lable: "UserName", type: "text", props: {required: true}},
          {key: "age", label: "Age", type: "number"},
          {key: "email", lable: "Email", type: "email", props: {required: true}},
          {key: "password", lable: "Password", type: "password", props: {required: true}},
        ]}
        onSubmit = {(model) => {this.onSubmit(model)}}
      />
<h1>{formdata}</h1>
    </div>
  );
  // }
};
// }

export default App;
