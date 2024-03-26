import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import cn from 'classnames';
import { setData } from '../../slices/formSlice/formSlice';

import Switcher from '../Switcher/Switcher';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Screen1.module.scss';

function Screen1() {
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('');

	const form = useSelector(state => state.form.form);
	console.log('form:', form);
	const dispatch = useDispatch();

	const methods = useForm({
		mode: 'onBlur',
		defaultValues: {
			vacancy: '',
			city: '',
			profession: '',
			relocate: false,
			remote: false,
			timezone_start: '',
			timezone_end: '',
		},
	});

	const watchInputs = methods.watch();
	// console.log('watchInputs:', watchInputs);

	const inputLarge = cn(styles.input_item, styles.input_large);
	const labelDisabled = cn(styles.input_label, styles.label_disabled);
	const inputDisabled = cn(styles.input_item, styles.input_disabled);
	const buttonDisabled = cn(styles.button, styles.button_disabled);

	const onSubmit = dataSubmit => {
		console.log('dataSubmit1', dataSubmit);
		// dispatch(setData(watchInputs));
	};

	const handleClick = e => {
		// e.preventDefault()
		dispatch(setData(watchInputs));

		navigate('/2');
	};

	const handleDropdownClick = () => {
		console.log('click prof');
		setIsActive(!isActive);
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Новая заявка</h1>
			<ul className={styles.progress_bar}>
				<li className={styles.list_item}></li>
				<li className={styles.list_item}></li>
				<li className={styles.list_item}></li>
				<li className={styles.list_item}></li>
				<li className={styles.list_item}></li>
				<li className={styles.list_item}></li>
			</ul>
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
								{methods.formState.errors?.vacancy && (
									<p className={styles.error}>
										{methods.formState.errors?.vacancy?.message || 'error'}
									</p>
								)}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="profession" className={styles.input_label}>
								Профессия *
							</label>
							<div>
								<div className={styles.input}>
									<input
										{...methods.register('profession', {
											required: 'Обязательное поле',
										})}
										type="text"
										id="profession"
										className={styles.input_item}
										placeholder=""
										// value={selected}
									/>
									{methods.formState.errors?.profession && (
										<p className={styles.error}>
											{methods.formState.errors?.profession?.message || 'error'}
										</p>
									)}
									<button className={styles.button_modal} onClick={handleDropdownClick} />
								</div>
								<Controller
									control={methods.control}
									name="dropdown"
									render={({ field: { onChange, onBlur, value, name }, fieldState: { error } }) => (
										<Dropdown
											onChange={onChange}
											name={name}
											value={value}
											setSelected={setSelected}
											setIsActive={setIsActive}
											selected={selected}
										/>
									)}
								/>
							</div>

							{/* {isActive && (
								<Dropdown selected={selected} setSelected={setSelected} setIsActive={setIsActive} />
							)} */}
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
								{methods.formState.errors?.city && (
									<p className={styles.error}>
										{methods.formState.errors?.city?.message || 'error'}
									</p>
								)}
							</div>
						</li>

						<li className={styles.input_container}>
							<label htmlFor="relocate" className={styles.input_label}>
								Возможность релокации
							</label>
							<Switcher id="relocate" />
						</li>
						<li className={styles.input_container}>
							<label htmlFor="remote" className={styles.input_label}>
								Полностью удалённая работа
							</label>
							<Switcher id="remote" />
						</li>

						<li className={styles.input_container}>
							<label
								htmlFor="timezone"
								className={watchInputs.remote ? styles.input_label : labelDisabled}
							>
								Часовые пояса
							</label>
							<input
								{...methods.register('timezone_start')}
								type="text"
								id="timezone"
								className={watchInputs.remote ? styles.input_item : inputDisabled}
								// className={styles.input_item}
								placeholder=""
								disabled={!watchInputs.remote}
							/>
							<input
								{...methods.register('timezone_end')}
								type="text"
								id="timezone"
								className={watchInputs.remote ? styles.input_item : inputDisabled}
								placeholder=""
								disabled={!watchInputs.remote}
							/>
						</li>
					</ul>
					<button
						type="button"
						disabled={!methods.formState.isValid}
						className={!methods.formState.isValid ? styles.button : buttonDisabled}
						onClick={handleClick}
					>
						Далее
					</button>
				</form>
			</FormProvider>
		</section>
	);
}

export default Screen1;
