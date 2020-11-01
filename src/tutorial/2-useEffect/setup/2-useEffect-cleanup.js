import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);
	console.log(size);

	const checkSize = () => setSize(window.innerWidth);

	useEffect(() => {
		console.log('hello world');
		window.addEventListener('resize', checkSize)
		return () => {
			console.log('cleanup')
			window.removeEventListener('resize', checkSize)
		}
	})

	return (
		<React.Fragment>
			<h1>window</h1>
			<h2>{size} PX</h2>
		</React.Fragment>
	)
};

export default UseEffectCleanup;
