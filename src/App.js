import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => {
	const [showForm, setShowForm] = useState(false);
	const [showCv, setShowCv] = useState(true);
	const [form, setForm] = useState({
					firstName: '', lastName: '', email: '', phone: '',
					school: '', study: '', schoolDate: '',
					experience: [{ company: '', position: '', tasks: '',
					companyDateStart: '', companyDateEnd: '' }]
				});
	const [contact, setContact] = useState({
					firstName: '',
					lastName: '',
					email: '',
					phone: ''
				});
	const [education, setEducation] = useState({
						school: '',
						study: '',
						schoolDate: ''
					});
	const [experience, setExperience] = useState([{
						company: '',
						position: '',
						tasks: '',
						companyDateStart: '',
						companyDateEnd: ''
					}]);

	// On edit, show form
	const edit = () => {
		setShowForm(showForm ? false : true);
		setShowCv(showCv ? false : true);
	};

	// Dynamically change state from form inputs
	const handleChange = (event) => {
		setForm({
			...form, // Spread notation, merge all other existing properties
			[event.target.name]: event.target.value // Square brackets used for dynamic key
		});
	};

	// Dynamically change state from form experience inputs
	const handleChangeExp = (event, i) => {
		const temp = form.experience;
		temp[i] = {
			...temp[i],
			[event.target.name]: event.target.value
		};

		setForm({
			...form,
			experience: temp
		});
	};

	// Remove experience
	const removeExp = (event, i) => {
		const array1 = form.experience.slice(0, i); // Slice array from beginning to task position
		const array2 = form.experience.slice(i + 1); // Slice array from task index + 1 to end

		setForm({
			...form,
			experience: array1.concat(array2) // Merge array slices and set as new tasks array
		});
	}

	// Add experience
	const addExp = () => {
		setForm({
			...form,
			experience: form.experience.concat(
				{ company: '', position: '', tasks: '',
					companyDateStart: '', companyDateEnd: '' })
		});
	};

	// Clear
	const clear = () => {
		setForm({
			firstName: '', lastName: '', email: '', phone: '',
			school: '', study: '', schoolDate: '',
			experience: [{ company: '', position: '', tasks: '',
				companyDateStart: '', companyDateEnd: '' }]
		});
	};

	// Submit form
	const submit = () => {
		setShowForm(false);
		setShowCv(true);
		setContact({
			firstName: form.firstName,
			lastName: form.lastName,
			email: form.email,
			phone: form.phone
		});
		setEducation({
			school: form.school,
			study: form.study,
			schoolDate: form.schoolDate
		});
		setExperience(form.experience);
	};

	const { firstName, lastName, email, phone } = contact;
	const { school, study, schoolDate } = education;

	return (
		<div id="container">
			<Header />
			<div id="main">
				<div id="form-container">
					<div className="btn-container"><button className="btn" type="button" onClick={edit}>Edit</button></div>
					{showForm ? <Form form={form} handleChange={handleChange} handleChangeExp={handleChangeExp}
						removeExp={removeExp} addExp={addExp} clear={clear} submit={submit} /> : null}
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
};

export default App;
