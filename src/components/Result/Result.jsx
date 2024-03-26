import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Result.module.scss';

function Result() {
	const navigate = useNavigate();

	const form = useSelector(state => state.form.form);
	const [values, setValues] = useState(form);

	return (
		<div className={styles.container}>
			<div className={styles.list}>
				{Object.entries(values).map(([key, value]) => (
					<div className={styles.row} key={key}>
						<span className={styles.key}>{key}: </span>
						<p className={styles.value}>{`${value}, `}</p>
					</div>
				))}
			</div>

			<button className={styles.button} onClick={() => navigate('/5')}>
				Назад
			</button>
		</div>
	);
}

export default Result;
