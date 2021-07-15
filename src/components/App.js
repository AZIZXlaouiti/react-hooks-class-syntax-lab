import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
// import user from "../data/user";
// console.log(user);

class App extends Component
 {
 
  render(){
     return(
    <div>
      <NavBar />
      <Home username={this.props.user.name} city={this.props.user.city} color={this.props.user.color} />
      <About bio={this.props.user.bio} links={this.props.user.links} />
    </div>
  
     )
  }
    
}

export default App;
