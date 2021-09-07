import React, { Component } from "react"
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from "formik"
import TodoDataService from "./api/TodoDataService.js"
import AuthenticationService from "./AuthenticationService.js"

export class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }
    onSubmit = (values) => {

        let username = AuthenticationService.getLoggedInUserName();

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {

            TodoDataService.createTodo(username, todo)
                .then(() => this.props.history.push('/todos'))
        }
        else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push('/todos'))
        }
    }
    validate = (values) => {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 4) {
            errors.description = 'Enter at least 4 Characters in Description!'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target date!'
        }

        console.log(values)
        return errors;
    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName();

        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    }

    render() {
        let description = this.state.description
        let targetDate = this.state.targetDate

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">

                    <Formik
                        initialValues={{
                            description: description,
                            targetDate: targetDate
                        }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description"
                                        component="div"
                                        className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <ErrorMessage name="targetDate"
                                        component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}