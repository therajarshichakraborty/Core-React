import React from 'react';
import './App.css';
function App() {
	const containerStyle = {
		fontFamily: 'system-ui, sans-serif',
		backgroundColor: '#0f1014',
		color: '#fff',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20px',
	};

	const cardStyle = {
		background: '#1c1e26',
		padding: '2rem',
		borderRadius: '15px',
		boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
		textAlign: 'center',
		border: '1px solid #333',
	};

	const counterDisplay = {
		fontSize: '3rem',
		fontWeight: 'bold',
		margin: '20px 0',
		color: '#45a049',
	};

	const btnStyle = {
		margin: '5px',
		padding: '12px 20px',
		borderRadius: '8px',
		background: '#16171d',
		border: '1px solid #444',
		color: 'white',
		cursor: 'pointer',
		fontSize: '14px',
		fontWeight: '600',
		transition: 'all 0.2s ease',
	};

	const inputStyle = {
		padding: '12px',
		borderRadius: '8px',
		border: '1px solid #444',
		background: '#0f1014',
		color: 'white',
		marginRight: '10px',
		outline: 'none',
		width: '100px',
		textAlign: 'center',
	};

	return (
		<div style={containerStyle}>
			<h1 style={{ marginBottom: '10px', opacity: 0.9 }}>React Fundamentals</h1>
			<br />
			<p style={{ color: '#888', marginBottom: '30px' }}>
				Interactive Counter Concept
			</p>

			<div style={cardStyle}>
				<div style={{ fontSize: '1.2rem', color: '#aaa' }}>Current Count</div>
				<div style={counterDisplay}>99</div>

				<div style={{ marginBottom: '30px' }}>
					<button style={{ ...btnStyle, borderColor: '#0f1924' }}>
						Increase
					</button>
					<button style={btnStyle}>Decrease</button>
					<button style={{ ...btnStyle, color: '#ff4d4d' }}>Reset</button>
				</div>

				<div style={{ borderTop: '1px solid #333', paddingTop: '20px' }}>
					<input
						type="number"
						value="779"
						style={inputStyle}
						readOnly
					/>
					<button
						style={{ ...btnStyle, background: '#050608', border: 'none' }}>
						Set Value
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
