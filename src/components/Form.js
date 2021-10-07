import React from 'react';

const Form = (props) => {
	const { form, handleChange, clear, submit } = props;

	return (
		<div id="form">
			<form>
				<h3>Contact Information</h3>
				<label>First Name</label><input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
				<label>Last Name</label><input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
				<label>Email</label><input type="text" name="email" value={form.email} onChange={handleChange} />
				<label>Phone</label><input type="text" name="phone" value={form.phone} onChange={handleChange} />
				<h3>Education</h3>
				<label>School</label><input type="text" name="school" value={form.school} onChange={handleChange} />
				<label>Study</label><input type="text" name="study" value={form.study} onChange={handleChange} />
				<label>Date</label><input type="date" name="schoolDate" value={form.schoolDate} onChange={handleChange} />
				<h3>Experience</h3>
				<label>Company</label><input type="text" name="company" value={form.company} onChange={handleChange} />
				<label>Position</label><input type="text" name="position" value={form.position} onChange={handleChange} />
				<label>Tasks</label><textarea name="tasks" value={form.tasks} onChange={handleChange} />
				<label>Date Start</label><input type="date" name="companyDateStart" value={form.companyDateStart} onChange={handleChange} />
				<label>Date End</label><input type="date" name="companyDateEnd" value={form.companyDateEnd} onChange={handleChange} />
				<br />
				<div class="btn-container">
					<button class="btn" type="button" onClick={clear}>Clear</button>
					<button class="btn" type="button" onClick={submit}>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Form;