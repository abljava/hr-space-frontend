import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cn from 'classnames';

// import Switcher from '../Switcher/Switcher';
import { CONTRACT, CONDITIONS, SCHEDULE } from '../../utils/constants';

import styles from './Screen3.module.scss';

function Screen3({ onChange }) {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const watchInputs = watch();
	const inputSmall = cn(styles.input_item, styles.input_small);
	const labelTop = cn(styles.input_label, styles.input_label_top);
	const buttonBack = cn(styles.button, styles.button_back);

	const onSubmit = dataSubmit => {
		console.log('dataSubmit', dataSubmit);
	};

	const handleClick = () => {
		onChange(watchInputs);
		navigate('/');
		// console.log('watchInputs:', watchInputs);
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Условия для кандидата</h1>
			<div className={styles.progress_bar}></div>

			<form className={styles.form_container} onSubmit={handleSubmit(onSubmit)} noValidate>
				<h2 className={styles.title}>О вакансии</h2>
				<ul className={styles.input_list}>
					<li className={styles.input_container}>
						<label htmlFor="salary" className={styles.input_label}>
							Зарплата на руки *
						</label>
						<div className={styles.fieldbox}>
							<div className={styles.input}>
								<input
									{...register('salary_min', {
										required: 'Обязательное поле',
									})}
									type="text"
									id="salary_min"
									className={inputSmall}
									placeholder="От"
								/>
								{errors?.salary_min && (
									<p className={styles.error}>{errors?.salary_min?.message || 'error'}</p>
								)}
							</div>
							<div className={styles.input}>
								<input
									{...register('salary_max', {
										required: 'Обязательное поле',
									})}
									type="text"
									id="salary_max"
									className={inputSmall}
									placeholder="До"
								/>
								{errors?.salary_max && (
									<p className={styles.error}>{errors?.salary_max?.message || 'error'}</p>
								)}
							</div>
						</div>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="checkbox" className={labelTop}>
							Занятость *
						</label>
						<div>
							{CONDITIONS.map(item => (
								<div className={styles.checkbox_container} key={item.id}>
									<input className={styles.checkbox} type="checkbox" />
									<p className={styles.description}>{item.text}</p>
								</div>
							))}
						</div>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="checkbox" className={labelTop}>
							График работы *
						</label>
						<div>
							{SCHEDULE.map(item => (
								<div className={styles.checkbox_container} key={item.id}>
									<input className={styles.checkbox} type="checkbox" />
									<p className={styles.description}>{item.text}</p>
								</div>
							))}
						</div>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="checkbox" className={labelTop}>
							Способ оформления
						</label>
						<div>
							{CONTRACT.map(item => (
								<div className={styles.checkbox_container} key={item.id}>
									<input className={styles.checkbox} type="checkbox" />
									<p className={styles.description}>{item.text}</p>
								</div>
							))}
						</div>
					</li>
				</ul>
				<div className={styles.button_container}>
					<>
						<button className={buttonBack} onClick={() => navigate('/2')}>
							Назад
						</button>
						<button className={styles.button} onClick={handleClick}>
							Далее
						</button>
					</>
				</div>
			</form>
		</section>
	);
}

export default Screen3;
