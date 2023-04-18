import React from 'react';
import Home from './components/Home';
import MediumTask1 from './components/MediumTask1';
import MediumTask2 from './components/MediumTask2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	// return <MediumTask1 />;
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="task1"
					element={<MediumTask1 />}
				/>
				<Route
					path="task2"
					element={<MediumTask2 />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
