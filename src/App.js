import React from 'react';
import NavBar from './navBar';
import './App.css';

export default class App extends React.Component {



  
    // alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.state.data]
    })
  }

render () {

  return (
    <div>
      <NavBar />
      
    </div>
  );
};
}