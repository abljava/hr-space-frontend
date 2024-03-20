// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import cn from 'classnames';

import Switcher from '../Switcher/Switcher';

import styles from './Screen1.module.scss';

function Screen1({ onChange }) {
	// const [values, setValues] = useState({});
	const methods = useForm({ mode: 'onBlur' });
	const navigate = useNavigate();

	// const {
	// 	methods.register,
	// 	handleSubmit,
	// 	watch,
	// 	formState: { methods.errors },
	// } = useForm({ mode: 'onBlur' });

	const watchInputs = methods.watch();
	const inputLarge = cn(styles.input_item, styles.input_large);

	const onSubmit = dataSubmit => {
		console.log('dataSubmit', dataSubmit);
	};

	const handleClick = () => {
		onChange(watchInputs);
		navigate('/2');
		// console.log('watchInputs:', watchInputs);
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Новая заявка</h1>
			<div className={styles.progress_bar}></div>
			<FormProvider {...methods}>
				<form
					className={styles.form_container}
					onSubmit={methods.handleSubmit(onSubmit)}
					noValidate
				>
					<h2 className={styles.title}>О вакансии</h2>
					<ul className={styles.input_list}>
						<li className={styles.input_container}>
							<label htmlFor="vacancy" className={styles.input_label}>
								Название вакансии *
							</label>
							<div>
								<input
									{...methods.register('vacancy', {
										required: 'Обязательное поле',
									})}
									type="text"
									id="vacancy"
									className={inputLarge}
									placeholder=""
								/>
								{methods.errors?.vacancy && (
									<p className={styles.error}>{methods.errors?.vacancy?.message || 'error'}</p>
								)}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="profession" className={styles.input_label}>
								Профессия *
							</label>
							<div>
								<input
									{...methods.register('profession', {
										required: 'Обязательное поле',
									})}
									type="text"
									id="profession"
									className={styles.input_item}
									placeholder=""
								/>
								{methods.errors?.profession && (
									<p className={styles.error}>{methods.errors?.profession?.message || 'error'}</p>
								)}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="city" className={styles.input_label}>
								Место работы *
							</label>
							<div>
								<input
									{...methods.register('city', {
										required: 'Обязательное поле',
									})}
									type="text"
									id="city"
									required
									className={styles.input_item}
									placeholder=""
								/>
								{methods.errors?.city && (
									<p className={styles.error}>{methods.errors?.city?.message || 'error'}</p>
								)}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="relocate" className={styles.input_label}>
								Возможность релокации
							</label>
							<Switcher />
						</li>
						<li className={styles.input_container}>
							<label htmlFor="remote" className={styles.input_label}>
								Полностью удалённая работа
							</label>
							<Switcher id="remote" />
						</li>

						<li className={styles.input_container}>
							<label htmlFor="timezone" className={styles.input_label}>
								Часовые пояса
							</label>
							<input
								{...methods.register('timezone_start')}
								type="text"
								id="timezone"
								className={styles.input_item}
								placeholder=""
							/>
							<input
								{...methods.register('timezone_end')}
								type="text"
								id="timezone"
								className={styles.input_item}
								placeholder=""
							/>
						</li>
					</ul>
					<button className={styles.button} onClick={handleClick}>
						Далее
					</button>
				</form>
			</FormProvider>
		</section>
	);
}

export default Screen1;
