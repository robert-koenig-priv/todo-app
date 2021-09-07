import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloService from './api/HelloService.js';

export class WelcomeComponent extends Component {

  constructor(props){
      super(props)
      this.state = {
        welcomeMessage : ''
      }

  }

  retrieveWelcomeMessage = () => {
    HelloService.executeHelloWorldService()
    .then(response => this.handleSuccesfullResponse(response) )
    .catch(error => this.handleError(error) )
  }

  handleSuccesfullResponse = (response) => {
    
     this.setState({welcomeMessage :  response.data.message})
  }
  
  handleError = (error) => {
    console.log(error.response)
    this.setState({welcomeMessage :  error.response.data.message})
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}
          You can manage your todos <Link to="/todos">here</Link>
        </div>
        <div className="container">
            Click here to get a customzied wecome message
            <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcom Message</button>
        </div>
        <div className="container">
            {this.state.welcomeMessage}
        </div>
      </>
    )


  }
}
