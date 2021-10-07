import React from 'react';

const Contact = (props) => {
	const { firstName, lastName, email, phone } = props;

	return (
		<div>
			<h2>Contact Information</h2>
			<hr />
			<div><div>First Name:</div><div>{firstName}</div></div>
			<div><div>Last Name:</div><div>{lastName}</div></div>
			<div><div>Email:</div><div>{email}</div></div>
			<div><div>Phone Number:</div><div>{phone}</div></div>
		</div>
	);
}

export default Contact;