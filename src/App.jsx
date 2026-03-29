import React from 'react';
import { useState } from 'react';
import './App.css';
const App = () => {
	const btnBaseStyle = {
		margin: '0 5px',
		padding: '10px 20px',
		borderRadius: '5px',
		background: '#16171d',
		border: '1px solid #444',
		color: 'white',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
	};

	const inputStyle = {
		background: '#16171d',
		border: '1px solid #444',
		color: 'white',
		padding: '10px',
		borderRadius: '5px',
		width: '80px',
		textAlign: 'center',
	};

	const [count, setCount] = useState(0);
	const [countToSet, setCountToSet] = useState(0);

	// const incrementHandler = (number)=>{
	// 	setCount(number)
	// }

	
	return (
		<div
			style={{
				backgroundColor: '#0b0c10',
				color: 'white',
				minHeight: '100vh',
				padding: '40px',
				fontFamily: 'sans-serif',
				textAlign: 'center',
			}}>
			<h1>React Fundamentals</h1>
			<p style={{ color: '#888' }}>Hello Counter {count}</p>

			<div
				className="card"
				style={{
					fontSize: '24px',
					margin: '20px 0',
					fontWeight: 'bold',
				}}>
				counter is {count}
			</div>

			<div style={{ marginBottom: '20px' }}>
				<button
					onClick={() => setCount(count + 1)}
					className="btn"
					style={btnBaseStyle}>
					Increase the count
				</button>
				<button
					className="btn"
					onClick={() => setCount((count) => Math.max(count - 1, 0))}
					style={btnBaseStyle}>
					Decrease the count
				</button>
				<button
					className="btn"
					onClick={() => setCount((count) => 0)}
					style={btnBaseStyle}>
					Reset
				</button>
			</div>

			<div style={{ marginTop: '30px' }}>
				<input
					type="text"
					value={countToSet}
					onChange={(event) => setCountToSet(Number(event.target.value))}
					style={inputStyle}
				/>
				<button
					className="btn"
					onClick={()=>{
						setCount(Number(countToSet))
						setCountToSet(0)
					}}
					style={{ ...btnBaseStyle, marginLeft: '10px' }}>
					Set the value to {countToSet}
				</button>
			</div>
		</div>
	);
};

export default App;
