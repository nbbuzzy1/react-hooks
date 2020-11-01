import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
	const [loading, setLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [user, setUser] = useState('default user');

	useEffect(() => {
		fetch(url)
			.then((resp) => {
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json();
				}

				setLoading(false);
				setError(true);
				throw new Error(resp.statusText)
			})
			.then(({ login }) => {
				setUser(login)
				setLoading(false);
			})
			.catch((error) => console.log(error))
	}, [])


	if (loading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		)
	}

	if (isError) {
		return (
			<div>
				<h2>Error...</h2>
			</div>
		)
	}

	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
};

export default MultipleReturns;
