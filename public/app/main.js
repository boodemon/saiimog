import React, { Component } from 'react'
import { render } from 'react-dom'
import './main.scss'

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Hello Saimok developer</h1>
      </div>
    )
  }
}

render(<HelloWorld />, document.getElementById('app'))
