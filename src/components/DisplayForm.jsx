import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

const DisplayForm = ({ addOn }) => {
	const [name, setName] = useState('');
	const [service, setService] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!name.trim() || !service.trim()) {
			return;
		}
		addOn({ name, service });
		setName('');
		setService('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Add Element to Queue</h2>
				<div>
					<input
						type="text"
						value={name}
						placeholder="name"
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<select
						name="service" 
						value={service} 
						onChange={(event) => setService(event.target.value)}>
						<option value="">Select Service</option>{' '}
						<option value="Consultation">Consultation</option>
						<option value="Payment">Payment</option>
						<option value="Support">Support</option>
					</select>
				</div>

				<button type="submit">
					<FaUserPlus />
					Add Customer
				</button>
			</form>
		</div>
	);
};

export default DisplayForm;
