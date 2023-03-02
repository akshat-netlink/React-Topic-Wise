import React, { Component } from 'react'

export default class shouldComponentUpdate extends Component {

    constructor(){
        super();

        this.state={
            count:0
        }
    }

    shouldComponentUpdate(){
        if(this.state.count>4 && this.state.count<10){
            return true
        }
        else return false
    }

  render() {


    
    
    return (
      <div className='container'>
        <h1>ShouldComponentUpdate</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}} >Update Count</button>
      </div>
    )
  }
}
