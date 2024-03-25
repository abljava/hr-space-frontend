import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../../slices/formSlice/formSlice';

// import Switcher from '../Switcher/Switcher';
import { CONTRACT, CONDITIONS, SCHEDULE } from '../../utils/constants';

import styles from './Screen3.module.scss';
import Checkbox from '../Checkbox/Checkbox';

function Screen3() {
	const navigate = useNavigate();

	const form = useSelector(state => state.form.form);
	const dispatch = useDispatch();

	const methods = useForm({
		mode: 'onBlur',
		defaultValues: {},
	});

	const {
		control,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const watchInputs = methods.watch();
	const inputSmall = cn(styles.input_item, styles.input_small);
	const labelTop = cn(styles.input_label, styles.input_label_top);
	const buttonBack = cn(styles.button, styles.button_back);
	const buttonDisabled = cn(styles.button, styles.button_disabled);

	const onSubmit = dataSubmit => {
		console.log('dataSubmit3', dataSubmit);
	};

	const handleClick = () => {
		dispatch(setData(watchInputs));
		navigate('/');
	};

	// const isChecked = (array) => {
	// 	 const res = array.map(item => methods.watch(item))
	// 	 return res

	// }

	// console.log(isChecked(CONDITIONS));

	console.log('watchInputs 3:', watchInputs);

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Условия для кандидата</h1>
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
							<label htmlFor="salary" className={styles.input_label}>
								Зарплата на руки *
							</label>
							<div className={styles.fieldbox}>
								<div className={styles.input}>
									<input
										{...methods.register('salary_min', {
											required: 'Обязательное поле',
										})}
										type="text"
										id="salary_min"
										className={inputSmall}
										placeholder="От"
									/>
									{methods.errors?.salary_min && (
										<p className={styles.error}>{methods.errors?.salary_min?.message || 'error'}</p>
									)}
								</div>
								<div className={styles.input}>
									<input
										{...methods.register('salary_max', {
											required: 'Обязательное поле',
										})}
										type="text"
										id="salary_max"
										className={inputSmall}
										placeholder="До"
									/>
									{methods.errors?.salary_max && (
										<p className={styles.error}>{methods.errors?.salary_max?.message || 'error'}</p>
									)}
								</div>
							</div>
						</li>

						{/* -------------------------------------------------- */}
						{/* <li className={styles.input_container}>
							<label htmlFor="checkbox" className={labelTop}>
								Занятость *
							</label>
							<div>
								<Controller
									control={methods.control}
									name="checkboxes"
									render={({ field }) => (
										<ul>
											{CONDITIONS.map(({ id, name, text }, index) => (
												<li key={id}>
													<input type="checkbox" name={name} id={id} {...field} required />
													<p>{text}</p>
												</li>
											))}
										</ul>
									)}
								/>
							</div>
						</li> */}
						{/* -------------------------------------------------- */}

						<li className={styles.input_container}>
							<label htmlFor="checkbox" className={labelTop}>
								Занятость *
							</label>
							<div>
								{CONDITIONS.map(item => (
									<Checkbox name={item.name} text={item.text} key={item.id} />
								))}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="checkbox" className={labelTop}>
								График работы *
							</label>
							<div>
								{SCHEDULE.map(item => (
									<Checkbox name={item.name} text={item.text} key={item.id} />
								))}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="checkbox" className={labelTop}>
								Способ оформления
							</label>
							<div>
								{CONTRACT.map(item => (
									<Checkbox name={item.name} text={item.text} key={item.id} />
								))}
							</div>
						</li>
					</ul>
					<div className={styles.button_container}>
						<>
							<button className={buttonBack} onClick={() => navigate('/2')}>
								Назад
							</button>
							<button
								disabled={!methods.formState.isValid}
								className={!methods.formState.isValid ? styles.button : buttonDisabled}
								onClick={handleClick}
							>
								Далее
							</button>
						</>
					</div>
				</form>
			</FormProvider>
		</section>
	);
}

export default Screen3;
