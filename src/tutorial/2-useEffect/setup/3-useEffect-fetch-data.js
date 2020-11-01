import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		setUsers(users);
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<React.Fragment>
			<h2>GitHub Users</h2>
			<ul className="users">
				{users.map(({ id, login, avatar_url, html_url }) => {
					return (
						<li key={id}>
							<img src={avatar_url} alt={html_url} />
							<div>
								<h4>{login}</h4>
								<a href={html_url}>profile</a>
							</div>
						</li>
					)
				})}
			</ul>
		</React.Fragment>
	);
};

export default UseEffectFetchData;
