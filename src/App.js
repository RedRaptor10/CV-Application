import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			showCv: true,
			form: {
				firstName: '', lastName: '', email: '', phone: '',
				school: '', study: '', schoolDate: '',
				experience: [{ company: '', position: '', tasks: '',
					companyDateStart: '', companyDateEnd: '' }]
			},
			contact: {
				firstName: '',
				lastName: '',
				email: '',
				phone: ''
			},
			education: {
				school: '',
				study: '',
				schoolDate: ''
			},
			experience: [{
				company: '',
				position: '',
				tasks: '',
				companyDateStart: '',
				companyDateEnd: ''
			}]
		};
		this.edit = this.edit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeExp = this.handleChangeExp.bind(this);
		this.removeExp = this.removeExp.bind(this);
		this.addExp = this.addExp.bind(this);
		this.clear = this.clear.bind(this);
		this.submit = this.submit.bind(this);
	}

	// On edit, show form
	edit = () => {
		this.setState({
			showForm: this.state.showForm ? false : true,
			showCv: this.state.showCv ? false : true
		});
	};

	// Dynamically change state from form inputs
	handleChange = (event) => {
		this.setState({
			form: {
				...this.state.form, // Spread notation, merge all other existing properties
				[event.target.name]: event.target.value // Square brackets used for dynamic key
			}
		});
	};

	// Dynamically change state from form experience inputs
	handleChangeExp = (event, i) => {
		const temp = this.state.form.experience;
		temp[i] = {
			...temp[i],
			[event.target.name]: event.target.value
		};

		this.setState({
			form: {
				...this.state.form,
				experience: temp
			}
		});
	};

	// Remove experience
	removeExp = (event, i) => {
		const array1 = this.state.form.experience.slice(0, i); // Slice array from beginning to task position
		const array2 = this.state.form.experience.slice(i + 1); // Slice array from task index + 1 to end

		this.setState({
			form: {
				...this.state.form,
				experience: array1.concat(array2) // Merge array slices and set as new tasks array
			}
		});
	}

	// Add experience
	addExp = () => {
		this.setState({
			form: {
				...this.state.form,
				experience: this.state.form.experience.concat(
					{ company: '', position: '', tasks: '',
						companyDateStart: '', companyDateEnd: '' })
			}
		});
	};

	// Clear
	clear = () => {
		this.setState({
			form: {
				firstName: '', lastName: '', email: '', phone: '',
				school: '', study: '', schoolDate: '',
				experience: [{ company: '', position: '', tasks: '',
					companyDateStart: '', companyDateEnd: '' }]
			}
		});
	};

	// Submit form
	submit = () => {
		const form = this.state.form;

		this.setState({
			showForm: false,
			showCv: true,
			contact: {
				firstName: form.firstName,
				lastName: form.lastName,
				email: form.email,
				phone: form.phone
			},
			education: {
				school: form.school,
				study: form.study,
				schoolDate: form.schoolDate
			},
			experience: form.experience
		});
	};

	render() {
		const { showForm, showCv, form, experience } = this.state;
		const { firstName, lastName, email, phone } = this.state.contact;
		const { school, study, schoolDate } = this.state.education;

		return (
			<div id="container">
				<Header />
				<div id="main">
					<div id="form-container">
						<div className="btn-container"><button className="btn" type="button" onClick={this.edit}>Edit</button></div>
						{showForm ? <Form form={form} handleChange={this.handleChange} handleChangeExp={this.handleChangeExp}
							removeExp={this.removeExp} addExp={this.addExp} clear={this.clear} submit={this.submit} /> : null}
					</div>
					{showCv ?
						<div id="cv">
						<div id="cv-header"><h1>Curriculum Vitae</h1></div>
						<Contact firstName={firstName} lastName={lastName} email={email} phone={phone} />
						<Education school={school} study={study} schoolDate={schoolDate} />
						<Experience experience={experience} />
					</div> : null}
				</div>
			</div>
		);
	}
}

export default App;
