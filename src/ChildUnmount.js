import React, { Component } from 'react'

export default class ChildUnmount extends Component {
    componentWillUnmount(){
        console.log("Component will unmount called")
    }
  render() {
    return (
      <div><h1>Show: True</h1></div>
    )
  }
}
