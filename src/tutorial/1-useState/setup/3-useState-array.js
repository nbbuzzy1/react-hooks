import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	const [people, setPeople] = React.useState(data);

	const removeItem = (id) => {
		const newData = people.filter((person) => person.id !== id);
		setPeople(newData);
	}

	return (
		<React.Fragment>
			{people.map(({ id, name }) => {
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
						<button onClick={() => removeItem(id)}>Delete</button>
					</div>
				)
			})}
			<button className="btn" onClick={() => setPeople([])}>Clear All</button>
		</React.Fragment>
	);
};

export default UseStateArray;
