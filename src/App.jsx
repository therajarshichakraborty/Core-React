import React from 'react';
import './App.css';
function App() {
	return (
		<>
			<h1>Lets clear the concept of react fundamentals</h1>
			<p>Hello Counter</p>
			<div className="card">counter is 99</div>
			<div>
				<button
					className="btn"
					style={{
						margin: '0 10px',
						padding: '10px',
						borderRadius: '5px',
						background: '#16171d',
						border: '1px solid #fff',
						color: 'white',
						cursor: 'pointer',
					}}>
					Increase the count
				</button>
			</div>
		</>
	);
}
export default App;
