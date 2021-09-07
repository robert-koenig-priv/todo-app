import React, { Component } from "react"
import './Counter.css'
import PropTypes from 'prop-types'


export default class Counter extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0,
        }

        // using increment as error functions removes necessity to bind
        //  this.increment = this.increment.bind(this)
    }

    // increment as error function
    increment = (by) => {

        console.log(`increment from parent - ${by}`)

        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        )
    }

    reset = () => {
         this.setState({counter: 0})
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incMethod={this.increment} />
                <CounterButton by={5} incMethod={this.increment} />
                <CounterButton by={-10} incMethod={this.increment} />
                <button className="reset" onClick={this.reset}>reset</button>
                <span className="count"> {this.state.counter}</span>
            </div>
        )
    }
}
class CounterButton extends Component {


    render() {

        //    const style = {fontSize: "50px", padding : "15px 30 px"}

        return (
            <div className="counter">
                <button onClick={() => this.props.incMethod(this.props.by)} >{this.props.by}</button>
                {/*    <span className="count"> {this.state.counter}</span> */}
            </div>
        )
    }

}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}