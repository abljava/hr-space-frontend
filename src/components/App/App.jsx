import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.root}>
			<Header/>
			<Routes>
				<Route path='/' element={<Main/>} />
			</Routes>
		</div>
	);
}

export default App;
