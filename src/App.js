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
			form: {
				firstName: '', lastName: '', email: '', phone: '',
				school: '', study: '', schoolDate: '',
				company: '', position: '', tasks: '',
				companyDateStart: '', companyDateEnd: ''
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
			experience: {
				company: '',
				position: '',
				tasks: '',
				companyDateStart: '',
				companyDateEnd: ''
			}
		};
		this.edit = this.edit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.clear = this.clear.bind(this);
		this.submit = this.submit.bind(this);
	}

	// On edit, show form
	edit = () => {
		this.setState({
			showForm: this.state.showForm ? false : true
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

	// Clear
	clear = () => {
		this.setState({
			form: {
				firstName: '', lastName: '', email: '', phone: '',
				school: '', study: '', schoolDate: '',
				company: '', position: '', tasks: '',
				companyDateStart: '', companyDateEnd: ''
			}
		});
	};

	// Submit form and change state
	submit = () => {
		const form = this.state.form;

		this.setState({
			showForm: false,
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
			experience: {
				company: form.company,
				position: form.position,
				tasks: form.tasks,
				companyDateStart: form.companyDateStart,
				companyDateEnd: form.companyDateEnd
			}
		});
	};

	render() {
		const { showForm, form } = this.state;
		const { firstName, lastName, email, phone } = this.state.contact;
		const { school, study, schoolDate } = this.state.education;
		const { company, position, tasks, companyDateStart, companyDateEnd } = this.state.experience;

		return (
			<div id="container">
				<Header />
				<div id="main">
					<div id="form-container">
						<div class="btn-container"><button class="btn" type="button" onClick={this.edit}>Edit</button></div>
						{showForm ? <Form form={form} handleChange={this.handleChange} clear={this.clear} submit={this.submit} /> : null}
					</div>
					<div id="cv">
						<div id="cv-header"><h1>Curriculum Vitae</h1></div>
						<Contact firstName={firstName} lastName={lastName} email={email} phone={phone} />
						<Education school={school} study={study} schoolDate={schoolDate} />
						<Experience company={company} position={position} tasks={tasks} companyDateStart={companyDateStart} companyDateEnd={companyDateEnd} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
