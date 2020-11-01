import React, { useState } from 'react';
import { Person } from '../../../Person';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName && email) {
			const person = new Person(firstName, email);
			setPeople((people) => [...people, person]);
			setEmail('');
			setFirstName('');
		}
	}

	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className="form-control">
						<label htmlFor="firstName">Name: </label>
						<input
							id="firstName"
							name="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="email">Email: </label>
						<input
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type="submit">Add Person</button>
				</form>
				{
					people.map(({ id, firstName, email }) => {
						return (
							<div key={id}>
								<h4>{firstName}</h4>
								<p>{email}</p>
							</div>
						)
					})
				}
			</article>
		</>
	)
};

export default ControlledInputs;
