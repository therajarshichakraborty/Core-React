import React from 'react';
function DisplayQueue({ queue, onUpdateStatus, onRemove }) {
	const getColor = (status) => {
		switch (status) {
			case 'waiting':
				return 'yellow';
			case 'success':
				return 'green';
			case 'completed':
				return 'blue';
			default:
				return 'grey';
		}
	};
	return (
		<>
			<div
				style={{
					background: '#1a1b1f',
					padding: '25px',
					borderRadius: '12px',
					width: '400px',
					boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
				}}>
				<h2 style={{ marginBottom: '20px' }}>Current Queue</h2>

				{queue.length === 0 ? (
					<p style={{ color: '#aaa' }}>No customers</p>
				) : (
					queue.map((item, index) => (
						<div
							key={index}
							style={{
								background: '#111',
								padding: '15px',
								borderRadius: '8px',
								marginBottom: '15px',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<div style={{ textAlign: 'left' }}>
								<p style={{ fontWeight: '600' }}>{item.name}</p>
								<p style={{ fontSize: '13px', color: '#aaa' }}>
									Service: {item.service}
								</p>
								<p
									style={{
										fontSize: '12px',
										color: getColor(item.status),
									}}>
									{item.status}
								</p>
							</div>

							<div style={{ display: 'flex', gap: '10px' }}>
								<button
									onClick={() => onUpdateStatus(index)}
									style={{
										background: '#4caf50',
										border: 'none',
										padding: '6px 10px',
										borderRadius: '5px',
										color: 'white',
										cursor: 'pointer',
									}}>
									Serve
								</button>

								<button
									onClick={() => onRemove(index)}
									style={{
										background: '#ff4d4d',
										border: 'none',
										padding: '6px 10px',
										borderRadius: '5px',
										color: 'white',
										cursor: 'pointer',
									}}>
									✖
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
}

export default DisplayQueue;
