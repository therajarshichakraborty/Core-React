import React from 'react';
import { useState } from 'react';
import './App.css';
import DisplayForm from './components/DisplayForm';
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
	const [queue, setQueue] = useState([]);

	// const incrementHandler = (number)=>{
	// 	setCount(number)
	// }

	const addToQueue = (customer) => {
		// add data to queue
	};

	const updateToQueue = (id, newStatus) => {
		// update into the queue
	};

	const removeFromQueue = (id) => {
		// remove from the queue
	};

	return (
		<>
			<div
				style={{
					backgroundColor: '#0b0c10',
					color: 'white',
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
						onClick={() => {
							setCount(Number(countToSet));
							setCountToSet(0);
						}}
						style={{ ...btnBaseStyle, marginLeft: '10px' }}>
						Set the value to {countToSet}
					</button>
				</div>
			</div>
			<div
				style={{
					backgroundColor: '#0b0c10',
					color: 'white',
					padding: '40px',
					fontFamily: 'sans-serif',
					textAlign: 'center',
				}}>
				<header>
					<h1>React Queue Management Application</h1>
					<p>Manage your customers efficiently</p>
				</header>
				<main>
					<DisplayForm addOn={addToQueue}/>
					<h1>QueueDisplay</h1>
				</main>
			</div>
		</>
	);
};

export default App;
