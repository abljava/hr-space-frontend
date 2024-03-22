import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Screen1 from '../Screen1/Screen1';
import Screen2 from '../Screen2/Screen2';
import Screen3 from '../Screen3/Screen3';

import styles from './App.module.scss';

function App() {
	const [data, setData] = useState({});

	console.log('data app:', data);

	const changeData = useCallback(value => {
		setData(previousInfo => {
			return {
				...previousInfo,
				...value,
			};
		});
	}, []);

	return (
		<div className={styles.root}>
			<Header />
			<Routes>
				<Route exact path="/" element={<Screen1 data={data} onChange={changeData} />} />
				<Route path="/2" element={<Screen2 data={data} onChange={changeData} />} />
				<Route path="/3" element={<Screen3 data={data} onChange={changeData} />} />
			</Routes>
		</div>
	);
}

export default App;
