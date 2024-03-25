import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setData } from '../../slices/formSlice/formSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Screen3.module.scss';
import validation from '../../utils/validation';

import { CONTRACT, CONDITIONS, SCHEDULE } from '../../utils/constants';

function Screen3() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const validation = yup.object().shape({
		conditions: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
		schedule: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
		contract: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
		salary_min: yup.string().required(),
		salary_max: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			conditions: [],
			schedule: [],
			contract: [],
			salary_min: '',
			salary_max: '',
		},
		resolver: yupResolver(validation),
	});

	const watchInputs = watch();
	console.log('watchInputs', watchInputs);

	const inputSmall = cn(styles.input_item, styles.input_small);
	const labelTop = cn(styles.input_label, styles.input_label_top);
	const buttonBack = cn(styles.button, styles.button_back);
	const buttonDisabled = cn(styles.button, styles.button_disabled);

	const onSubmit = dataSubmit => {
		console.log('dataSubmit3', dataSubmit);
	};

	const handleClick = () => {
		dispatch(setData(watchInputs));
		navigate('/4');
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Условия для кандидата</h1>
			<div className={styles.progress_bar}></div>
			<form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.title}>О вакансии</h2>
				<ul className={styles.input_list}>
					<li className={styles.input_container}>
						<label htmlFor="salary" className={styles.input_label}>
							Зарплата на руки *
						</label>
						<div className={styles.fieldbox}>
							<div className={styles.input}>
								<input
									{...register('salary_min')}
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
									{...register('salary_max')}
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
							{CONDITIONS.map(field => (
								<div key={field.id} className={styles.checkbox_container}>
									<input
										type="checkbox"
										className={styles.checkbox}
										value={field.text}
										{...register('conditions')}
									/>
									<p className={styles.description}>{field.text}</p>
									{errors.conditions && <span>{errors.conditions.message}</span>}
								</div>
							))}
						</div>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="checkbox" className={labelTop}>
							График работы *
						</label>
						<div>
							{SCHEDULE.map(field => (
								<div key={field.id} className={styles.checkbox_container}>
									<input
										type="checkbox"
										className={styles.checkbox}
										value={field.text}
										{...register('schedule')}
									/>
									<p className={styles.description}>{field.text}</p>
									{errors.schedule && <span>{errors.schedule.message}</span>}
								</div>
							))}
						</div>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="checkbox" className={labelTop}>
							Способ оформления
						</label>
						<div>
							{CONTRACT.map(field => (
								<div key={field.id} className={styles.checkbox_container}>
									<input
										type="checkbox"
										className={styles.checkbox}
										value={field.text}
										{...register('contract')}
									/>
									<p className={styles.description}>{field.text}</p>
									{errors.contract && <span>{errors.contract.message}</span>}
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
						<button
							disabled={!isValid}
							className={!isValid ? styles.button : buttonDisabled}
							onClick={handleClick}
							type="submit"
						>
							Далее
						</button>
					</>
				</div>
			</form>
		</section>
	);
}

export default Screen3;
