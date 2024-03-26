import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Screen1 from '../Screen1/Screen1';
import Screen2 from '../Screen2/Screen2';
import Screen3 from '../Screen3/Screen3';
import Screen4 from '../Screen4/Screen4';
import Screen5 from '../Screen5/Screen5';
import Result from '../Result/Result';

import styles from './App.module.scss';

function App() {
	const form = useSelector(state => state.form.form);
	console.log('form:', form);

	return (
		<div className={styles.root}>
			<Header />
			<Routes>
				<Route exact path="/" element={<Screen1 />} />
				<Route path="/2" element={<Screen2 />} />
				<Route path="/3" element={<Screen3 />} />
				<Route path="/4" element={<Screen4 />} />
				<Route path="/5" element={<Screen5 />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</div>
	);
}

export default App;
