import React, { useState } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0)
	const increase = () => {
		setValue(value + 1)
	}

	const complexIncrease = () => {
		// setTimeout(() => setValue(value + 1), 2000)
		setTimeout(() => setValue((prevState) => prevState + 1), 2000)
	}
	return (
		<>
			<section style={{ margin: '4rem 0' }}>
				<h2>Regular Counter</h2>
				<h1>{value}</h1>
				<button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
				<button className="btn" onClick={() => setValue(0)}>Reset</button>
				<button className="btn" onClick={increase}>Increase</button>
			</section>
			<section>
				<h2>More Complex Counter</h2>
				<h1>{value}</h1>
				<button className="btn" onClick={complexIncrease}>Complex Increase</button>
				<button className="btn" onClick={() => setValue(0)}>Reset</button>
				<button className="btn" onClick={increase}>Increase</button>
			</section>
		</>
	);
};

export default UseStateCounter;
