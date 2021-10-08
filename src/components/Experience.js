import React from 'react';

const Experience = (props) => {
	const { experience } = props;

	return (
		<div id="experience">
			<h2>Experience</h2>
			<hr />
			{experience.map((e, i) => {
				const tasksArray = e.tasks.split(/\n/); // Split tasks into an array

				return (
					<div key={i}>
						<div><div>Company:</div><div>{e.company}</div></div>
						<div><div>Position:</div><div>{e.position}</div></div>
						<div><div>Tasks:</div></div>
						{e.tasks ?
							<ul>
								{tasksArray.map((task, j) => {
									return (
										<li key={j}>{task}</li>
									);
								})}
							</ul>
						: null}
						<div><div>Date Start:</div><div>{e.companyDateStart}</div></div>
						<div><div>Date End:</div><div>{e.companyDateEnd}</div></div>
						<br />
					</div>
				);})
			}
		</div>
	);
}

export default Experience;