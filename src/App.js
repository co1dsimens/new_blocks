
import React, { Component } from "react";

class App extends Component{
  state = {
    count: 0,
    result: ' ',
    color: 'wrapper'
  }

  increment = () =>{
    this.setState({count: this.state.count + 1})
  }
  
  decrement = () =>{
    if(this.state.count > 0)
    this.setState({count: this.state.count - 1})
  
  }
  
  reset = () =>{
    this.setState({count: 0})
  }
  result = ()=>{
    if(this.state.count %2 === 0)
    {
      this.setState({result: this.state.result= 'even '})
      
      this.setState({color: this.state.color= 'wrapper_2 '})

    }
    else
    {
      this.setState({result: this.state.result= 'odd '})
      
      this.setState({color: this.state.color= 'wrapper_3'})
    }
    
  }
  render(){
    return(
      <div className={this.state.color} style={{display: 'flex',justifyContent: 'center'}}>
        <div> 
          <p style={{textAlign: 'center', fontSize: 40}}>{this.state.count} </p>
          <p style={{textAlign: 'center', fontSize: 40}}>{this.state.result} </p>
          <button className={'rm'} onClick={this.increment} style={{ fontSize: 40}}>+</button>
          <button className={'rm'} onClick={this.reset} style={{ fontSize: 40}}>reset</button>
          <button className={'rm'} onClick={this.decrement} style={{ fontSize: 40}}>-</button>
          
          <button className={'rm'} onClick={this.result} style={{ textAlign: 'center',fontSize: 40}}>result</button>
        </div>
        

      </div>
    );
  }





}
  
export default App;
