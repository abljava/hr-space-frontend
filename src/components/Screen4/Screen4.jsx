import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setData } from '../../slices/formSlice/formSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import styles from './Screen4.module.scss';

import { TAGS, INFORMATION, AMOUNT } from '../../utils/constants';
import Switcher from '../Switcher/Switcher';
import polygon from '../../assets/images/polygon.svg';
import icon from '../../assets/images/icon.svg';

function Screen4() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [tooltipVisible, setTooltipVisible] = useState(false);
	const [imageVisible, setImageVisible] = useState(false);
	const [selectedRecruiter, setSelectedRecruiter] = useState(null);
	const textareaRef = useRef(null);
	const [tagsList, setTagsList] = useState([]);
	const buttonBack = cn(styles.button, styles.button_back);
	const labelClass = cn(styles.input_label, styles.narrow_label);
	const buttonDisabled = cn(styles.button, styles.button_disabled);

	const validation = yup.object().shape({
		information: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
		amount_recruiters: yup.string().required(),
		amount_employee: yup.string().required(),
		payment: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			amount_employee: '',
			amount_recruiters: '',
			start_date: '',
			high_priority: false,
			information: [],
			payment: '',
			recruiter_specs: '',
			university_degree: false,
		},
		resolver: yupResolver(validation),
	});

	const watchInputs = watch();

	const toggleTooltip = () => {
		setTooltipVisible(!tooltipVisible);
		setImageVisible(!tooltipVisible);
	};

	const handleTagClick = tag => {
		const textarea = textareaRef.current;
		if (textarea) {
			const tagText = `\n${tag}`;
			const startPos = textarea.selectionStart;
			const endPos = textarea.selectionEnd;
			const newValue =
				textarea.value.substring(0, startPos) + tagText + textarea.value.substring(endPos);

			textarea.focus();
			textarea.value = newValue;
			textarea.setSelectionRange(startPos + tagText.length, startPos + tagText.length);

			setTagsList(prevTags => [...prevTags, tag]);
		}
	};
	const handleTextareaChange = e => {
		const { value } = e.target;
		const updatedTagsList = tagsList.filter(tag => value.includes(tag));
		setTagsList(updatedTagsList);
	};

	const handleInput = e => {
		const inputValue = e.target.value;
		if (!/^\d{0,2}$/.test(inputValue)) {
			e.target.value = inputValue.slice(0, 2);
		}
	};

	const onSubmit = dataSubmit => {
		dispatch(setData(watchInputs));
	};

	const handleClick = () => {
		navigate('/5');
		// dispatch(setData(watchInputs));
	};

	return (
		<>
			<section className={styles.container}>
				<h1 className={styles.heading}>Новая заявка</h1>
				<div className={`${styles.progress_bar} ${styles.progress_bar_new}`}></div>
				<form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.info_container}>
						<h2 className={styles.title}>Условия сотрудничества с HR</h2>
						<span className={styles.info__text}>Срочный статус заявки</span>

						<Controller
							control={control}
							name="high_priority"
							render={({ field: { onChange, name, value } }) => (
								<Switcher onChange={onChange} checked={value} name={name} />
							)}
						/>
						<div className={styles.tooltip_container}>
							<img
								src={icon}
								alt="Иконка"
								className={styles.tooltip_icon}
								onClick={toggleTooltip}
							/>
							{imageVisible && (
								<img src={polygon} alt="Треугольник подсказки" className={styles.tooltip_image} />
							)}
							{tooltipVisible && (
								<span className={styles.tooltip_text}>
									В среднем поиск занимает от 7 дней. Если вам нужен срочный поиск, рекрутер может
									запросить более высокую цену за работу.
								</span>
							)}
						</div>
					</div>
					<ul className={styles.input_list}>
						{/* ------------------ INPUT CHECKBOX -------------*/}
						<li className={`${styles.input_container} ${styles.custom_input_container}`}>
							<label htmlFor="recruiter" className={`${labelClass} ${styles.has_star}`}>
								Кол-во рекрутеров
							</label>
							<div className={styles.radio_container}>
								{AMOUNT.map(field => (
									<div key={field.id} className={styles.radio_input}>
										<input
											type="radio"
											className={styles.radio}
											value={field.name}
											{...register('amount_recruiters')}
										/>
										<p className={styles.radio_description}>{field.name}</p>

										{errors.amount_recruiters && <span>{errors.amount_recruiters.message}</span>}
									</div>
								))}
							</div>
						</li>

						<li className={`${styles.input_container} ${styles.custom_input_container}`}>
							<label htmlFor="recruiter_specs" className={labelClass}>
								Требования к рекрутеру
							</label>
							<div className={styles.input_content}>
								<textarea
									{...register('recruiter_specs')}
									id="recruiter_specs"
									className={styles.textarea_item}
									placeholder="Напишите ваши требования к рекрутеру"
									// ref={textareaRef}
									// onChange={handleTextareaChange}
								/>
								<div className={styles.tag_list}>
									{TAGS.map((tag, index) => (
										<button
											key={index}
											type="button"
											onClick={() => handleTagClick(tag)}
											disabled={tagsList.includes(tag)}
											className={styles.tag_button}
										>
											{tag}
										</button>
									))}
								</div>
							</div>
						</li>
						<li className={`${styles.input_container} ${styles.custom_input_container}`}>
							<label htmlFor="university_degree" className={labelClass}>
								Наличие высшего образования у рекрутера
							</label>
							<Controller
								control={control}
								name="university_degree"
								render={({ field: { onChange, name, value } }) => (
									<Switcher onChange={onChange} checked={value} name={name} />
								)}
							/>
						</li>
						<li className={`${styles.input_container} ${styles.custom_input_container}`}>
							<label htmlFor="number " className={`${labelClass} ${styles.has_star}`}>
								Кол-во сотрудников
							</label>
							<div>
								<input
									{...register('amount_employee', {
										required: 'Обязательное поле',
									})}
									type="text"
									id="amount_employee"
									className={styles.input_item_container}
									placeholder=""
									onInput={handleInput}
								/>
								{errors?.amount_employee && (
									<p className={styles.error}>{errors?.amount_employee?.message || 'error'}</p>
								)}
							</div>
						</li>
						<li className={`${styles.input_container} ${styles.custom_input_container}`}>
							<label htmlFor="payment" className={`${labelClass} ${styles.has_star}`}>
								Оплата за сотрудника
							</label>
							<div className={styles.input_wrapper}>
								<input
									{...register('payment', {
										required: 'Обязательное поле',
									})}
									type="text"
									id="payment"
									className={styles.input_item}
									placeholder="3000"
								/>
								<span className={styles.span_item}>
									Рекомендуем указать сумму равную среднему доходу кандидата или выше
								</span>
								{errors?.payment && (
									<p className={styles.error_message}>{errors?.payment?.message || 'error'}</p>
								)}
							</div>
						</li>
						<li className={`${styles.input_container} ${styles.custom_input_container}`}>
							<label htmlFor="start_date" className={labelClass}>
								Ожидаемая дата выхода сотрудника
							</label>
							<div className={styles.input_wrapper} data-input="start_date">
								<input
									{...register('start_date')}
									type="date"
									id="start_date"
									className={styles.input_item}
									placeholder="ДД.ММ.ГГГГ"
								/>
								<span className={styles.span_item}>
									В среднем для поиска сотрудника требуется от 1 до 2 месяцев
								</span>
							</div>
						</li>
						<li className={`${styles.input_container} ${styles.custom_input_container}`}>
							<label htmlFor="checkbox" className={`${labelClass} ${styles.has_star}`}>
								Информация по кандидату
							</label>
							<div>
								{INFORMATION.map(field => (
									<div key={field.id} className={styles.checkbox_container}>
										<input
											type="checkbox"
											className={styles.checkbox}
											value={field.text}
											{...register('information')}
										/>
										<p className={styles.description}>{field.text}</p>
										{errors.information && <span>{errors.information.message}</span>}
									</div>
								))}
							</div>
						</li>
					</ul>
					<div className={styles.button_container}>
						<>
							<button className={buttonBack} onClick={() => navigate('/3')}>
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
		</>
	);
}

export default Screen4;
