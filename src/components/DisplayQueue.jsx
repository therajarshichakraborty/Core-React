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
	return <div></div>;
}

export default DisplayQueue;
