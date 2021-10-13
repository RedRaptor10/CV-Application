import React from 'react';

const Form = (props) => {
	const { form, handleChange, handleChangeExp, removeExp, addExp, clear, submit } = props;

	return (
		<div id="form">
			<form>
				<h3>Contact Information</h3>
				<label>First Name</label><input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
				<label>Last Name</label><input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
				<label>Email</label><input type="text" name="email" value={form.email} onChange={handleChange} />
				<label>Phone Number</label><input type="text" name="phone" value={form.phone} onChange={handleChange} />
				<h3>Education</h3>
				<label>School</label><input type="text" name="school" value={form.school} onChange={handleChange} />
				<label>Study</label><input type="text" name="study" value={form.study} onChange={handleChange} />
				<label>Date</label><input type="date" name="schoolDate" value={form.schoolDate} onChange={handleChange} />
				<h3>Experience</h3>
				{form.experience.map((e, i) => {
					return (
						<div key={i}>
							<label>Company</label><input type="text" name="company" value={e.company} onChange={(event) => handleChangeExp(event, i)} />
							<label>Position</label><input type="text" name="position" value={e.position} onChange={(event) => handleChangeExp(event, i)} />
							<label>Tasks</label><textarea name="tasks" value={e.tasks} onChange={(event) => handleChangeExp(event, i)} />
							<label>Date Start</label><input type="date" name="companyDateStart" value={e.companyDateStart} onChange={(event) => handleChangeExp(event, i)} />
							<label>Date End</label><input type="date" name="companyDateEnd" value={e.companyDateEnd} onChange={(event) => handleChangeExp(event, i)} />
							<div class="btn-container-experience">
								{form.experience.length > 1 ?
									<button className="btn" type="button" onClick={(event) => removeExp(event, i)}>Remove</button>
								: null}
								<button className="btn" type="button" onClick={addExp}>Add</button>
							</div>
						</div>
					);})
				}
				<br />
				<div className="btn-container">
					<button className="btn" type="button" onClick={clear}>Clear</button>
					<button className="btn" type="button" onClick={submit}>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Form;