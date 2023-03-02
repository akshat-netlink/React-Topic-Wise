import React, { Component } from 'react'
import ChildUnmount from './ChildUnmount'

export default class ComponentWillUnmount extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }
  render() {
    return (
      <div>
        <h1>Component will unmount</h1>
        {
            this.state.show ? <div>
            <ChildUnmount/> <button onClick={()=>{this.setState({show:false})}} >Hide</button> </div> 
            : <div><h2>Show:False</h2><button onClick={()=>{this.setState({show:true})}}>Show</button></div>

        }
        
        
      </div>
    )
  }
}
