import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0)

	useEffect(() => {
		console.log('call use effect')
		if (value > 1) {
			console.log(value);
		}
	}, [value])
	console.log('render component')
	return (
		<>
			<h1>{value}</h1>
			<button onClick={() => setValue(value + 1)}>Increase</button>
		</>
	);
};

export default UseEffectBasics;
