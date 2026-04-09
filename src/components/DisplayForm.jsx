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
		<div
			style={{
				background: '#1a1b1f',
				padding: '25px',
				borderRadius: '12px',
				width: '300px',
				boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
			}}>
			<form onSubmit={handleSubmit}>
				<h2
					style={{
						marginBottom: '20px',
						color: '#6c63ff',
					}}>
					Add to Queue
				</h2>

				<div style={{ marginBottom: '15px' }}>
					<input
						type="text"
						value={name}
						placeholder="Customer Name"
						onChange={(event) => setName(event.target.value)}
						style={{
							width: '278px',
							padding: '10px',
							borderRadius: '6px',
							border: '1px solid #333',
							background: '#111',
							color: 'white',
						}}
					/>
				</div>

				<div style={{ marginBottom: '15px' }}>
					<select
						name="service"
						value={service}
						onChange={(event) => setService(event.target.value)}
						style={{
							width: '100%',
							padding: '10px',
							borderRadius: '6px',
							border: '1px solid #333',
							background: '#111',
							color: 'white',
						}}>
						<option value="">Select Service</option>
						<option value="Consultation">Consultation</option>
						<option value="Payment">Payment</option>
						<option value="Support">Support</option>
					</select>
				</div>

				<button
					type="submit"
					style={{
						width: '100%',
						padding: '12px',
						background: '#6c63ff',
						border: 'none',
						borderRadius: '6px',
						color: 'white',
						fontWeight: '600',
						cursor: 'pointer',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '8px',
					}}>
					<FaUserPlus />
					Add Customer
				</button>
			</form>
		</div>
	);
};

export default DisplayForm;
