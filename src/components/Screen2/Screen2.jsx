import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cn from 'classnames';

import styles from './Screen2.module.scss';

function Screen2({ data, onChange }) {
	const navigate = useNavigate();
	const buttonBack = cn(styles.button, styles.button_back);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const watchInputs = watch();

	const onSubmit = dataSubmit => {
		console.log('dataSubmit2', dataSubmit);
	};

	const handleClick = () => {
		navigate('/3');
		onChange(watchInputs);
	};

	return (
		<>
			<section className={styles.container}>
				<h1 className={styles.heading}>Требования и обязанности</h1>
				<div className={styles.button_container}>
					<>
						<button className={buttonBack} onClick={() => navigate('/')}>
							Назад
						</button>
						<button className={styles.button} onClick={handleClick}>
							Далее
						</button>
					</>
				</div>
			</section>
		</>
	);
}

export default Screen2;
