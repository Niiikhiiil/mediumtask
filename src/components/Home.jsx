import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='Home'>
			<Link to="task1">
				<button className='buttonn'>Medium Level Task-1</button>
			</Link>
			<Link to="task2">
				<button className='buttonn'>Medium Level Task-2</button>
			</Link>
		</div>
	);
};

export default Home;
