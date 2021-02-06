import { Component } from 'react';
import React { Component } from 'react';

export default class NewStudentForm extends Component {
    constructor (props) {
        super(props)
    }  
    render() {
        const buttonVisable = this.state.buttonVisable
        return (
            <form>
                <label>
                    Firstname:
                <input type='text' name='firstName' />
                </label>
                <label>
                    Lastname:
                <input type='text' name='lastName' />
                </label>
                <label>
                    Email:
                <input type='text' name='email' />
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}
