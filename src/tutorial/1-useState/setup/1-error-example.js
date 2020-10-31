import React from 'react';

const ErrorExample = () => {
	let title = 'random title';

	const handleClick = () => {
		title = 'bye';
	}

	return (
		<React.Fragment>
			<h2>{title}</h2>
			<button className='btn' onClick={handleClick}>Button</button>
		</React.Fragment>
	)
};

export default ErrorExample;
