import React, { Component } from 'react'
import FirstComponent, { SecondComponent } from './components/learning-examples/FirstComponent'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

// Function Component
function ThirdComponent() {
  return (
    <div className="thirdComponent">
      Third Component
    </div>
  )
}

export default App
