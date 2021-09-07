import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  HeaderComponent  from './HeaderComponent'
import AuthenticatedRoute from "./AuthenticatedRoute"
import { LoginComponent } from './LoginComponent'
import { ListTodosComponent } from './ListTodosComponent'
import { ErrorComponent } from './ErrorComponent'
import { WelcomeComponent } from './Welcome'
import { LogOutComponent } from './LogOutComponent'
import { FooterComponent } from './FooterComponent'
import { TodoComponent } from './TodoComponent'


export default class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">

        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" exact component={LoginComponent} />
              <AuthenticatedRoute path="/logout" exact component={LogOutComponent} />
              <AuthenticatedRoute path="/welcome/:name" exact component={WelcomeComponent} />
              <AuthenticatedRoute path="/todos/:id" exact component={TodoComponent} />
              <AuthenticatedRoute path="/todos" exact component={ListTodosComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>

      </div>
    )
  }
}

