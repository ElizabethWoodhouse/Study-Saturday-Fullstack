import React, { Component } from 'react';

export default class NewStudentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: ' ',
			lastName: ' ',
			email: ' ',
			userData: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		const { firstName, lastName, email } = this.state;
		this.setState({
			firstName: ' ',
			lastName: ' ',
			email: ' ',
			userData: [...this.state.userData, { firstName, lastName, email }],
		});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					First Name:
					<input
						required
						type='text'
						name='firstName'
						value={this.state.firstName}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Last Name:
					<input
						required
						type='text'
						name='lastName'
						value={this.state.lastName}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Email:
					<input
						required
						type='email'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</label>

				<button type='submit'>Submit New Student</button>
			</form>
		);
	}
}
