import React from 'react';

const Experience = (props) => {
	const { company, position, tasks, companyDateStart, companyDateEnd } = props;
	const tasksArray = tasks.split(/\n/); // Split tasks into array

	return (
		<div>
			<h2>Experience</h2>
			<hr />
			<div><div>Company:</div><div>{company}</div></div>
			<div><div>Position:</div><div>{position}</div></div>
			<div><div>Tasks:</div></div>
			{tasks ?
				<ul>
					{tasksArray.map((task, i) => {
						return (
							<li key={i}>{task}</li>
						);
					})}
				</ul>
			: null}
			<div><div>Date Start:</div><div>{companyDateStart}</div></div>
			<div><div>Date End:</div><div>{companyDateEnd}</div></div>
		</div>
	);
}

export default Experience;