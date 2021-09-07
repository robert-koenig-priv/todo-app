import React, { Component } from 'react'
import './App.css'
import './bootstrap.css'
// import SampleClassComponent from './components/learning-examples/SampleClassComponent'
// import SampleFunctionComponent from './components/learning-examples/SampleFunctionComponent'
// import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
    <div className="App">
       <TodoApp/>
    </div>
  );
  }
}


export default App;
