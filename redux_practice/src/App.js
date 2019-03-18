import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {setAge, setName} from './actions';

class App extends Component {
  state = {
    name: this.props.name,
    age: this.props.age
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  setNameLocal = (n) => {
    this.props.setName(n);
  }
  setAgeLocal = (a) => {
    this.props.setAge(a);
  }
  render() {
    return (
      <div className="App">
       <p>{this.props.name}</p>
       <form onSubmit={(e) => e.preventDefault()}>
         <input onChange={this.handleChange} name="name" type="text"/>
         <label>Name</label>
         <button onClick={this.setNameLocal(this.state.name)}>Set new name</button>
       </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age
  }
}

export default connect(mapStateToProps, {setName, setAge})(App);
