import React, { Component } from 'react'

export default class State extends Component {

  constructor(){
    super();
    this.state={
      name:'Akshat',
      email:'akshat@test.com',
      count:0,
      show:true
    }
  }
  Update(){
    this.setState({
      name:'Updated Name',
      email:'Updated@test.com',
      count:this.state.count+1
    })
  }

  


  render() {
    return (
      < div className='container'>

      <h1>State</h1>
        {
          this.state.show?
          <div>
            <h1>state={this.state.name} : {this.state.email}</h1>
            <h2>Count: {this.state.count}</h2>
            <button onClick={()=>{this.Update()}}>Update</button>
          </div>:
          <div>Data is unmounted.</div>
        }
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
      </div>
    )
  }
}

