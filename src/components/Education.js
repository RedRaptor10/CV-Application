import React from 'react';

const Education = (props) => {
	const { school, study, schoolDate } = props;

	return (
		<div>
			<h2>Education</h2>
			<hr />
			<div><div>School:</div><div>{school}</div></div>
			<div><div>Study:</div><div>{study}</div></div>
			<div><div>Date:</div><div>{schoolDate}</div></div>
		</div>
	);
}

export default Education;