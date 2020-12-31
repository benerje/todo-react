import React, { Component } from 'react'
import './App.css'
// import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Items from './components/items/Items';
import {connect} from 'react-redux'
import { addTodo } from './actions';


class App extends Component {

  setCurrentItem = (event) =>{
    event.preventDefault()
    let input = event.target.input.value
    this.props.dispatch(addTodo(input))
    event.target.input.value=''

  }

  render() {
    return (
      <div className="App">
        <div className='appContainer'>
          <h1 className='appTitle'>ToDo Application</h1>
              <form onSubmit={this.setCurrentItem} >
              
              <input 
                className='inputField' name="input" type='text' placeholder='Add Item' />
              
              <button type="submit" className='btn add'>+</button>
              </form>
              <Items/>
      </div>
      </div>
    )
  }
}
export default connect()(App)
