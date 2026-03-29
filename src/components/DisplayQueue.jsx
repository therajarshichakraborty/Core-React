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
			<div>
				<h2>Current User</h2>
				{queue.length === 0 ? (
					<p>No consumer there</p>
				) : (
					<p>one consumer there</p>
				)}
			</div>
		</>
	);
}

export default DisplayQueue;
