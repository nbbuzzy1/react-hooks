import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: ''
}

const Index = () => {
	const [name, setName] = useState('');

	const [state, dispatch] = useReducer(reducer, defaultState)

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			const newItem = { id: new Date().getTime(), name }
			dispatch({ type: 'ADD_ITEM', payload: newItem })
			setName('')
		} else {
			dispatch({ type: 'NO_VALUE' })
		}
	}

	const closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' })
	}

	return (
		<React.Fragment>
			{state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
			<form onSubmit={handleSubmit}>
				<div>
					<input
						className='form'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button className="btn" type="submit">Add</button>
			</form>
			{state.people.map(({ id, name }) => {
				return (
					<div key={id} className="item">
						<h4>{name}</h4>
						<button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}>Remove</button>
					</div>
				)
			})}
		</React.Fragment>
	)
};

export default Index;

