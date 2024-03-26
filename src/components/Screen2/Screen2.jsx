import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import styles from './Screen2.module.scss';
import { setData } from '../../slices/formSlice/formSlice';
import { EXPERIENCE, EDUCATION, SKILLS_DOCTOR, ADDITIONAL, BONUSES } from '../../utils/constants';

function Screen2() {
	// Состояние для выбранных навыков
	const [selectedSkills, setSelectedSkills] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const validation = yup.object().shape({
		experience: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
		education: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
		// additional: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
		// bonuses: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
		responsibilities: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			experience: [],
			education: [],
			additional: [],
			bonuses: [],
			responsibilities: '',
			skills: [],
		},
		resolver: yupResolver(validation),
	});

	const buttonBack = cn(styles.button, styles.button_back);
	const buttonDisabled = cn(styles.button, styles.button_disabled);
	const inputLarge = cn(styles.input_item, styles.input_large);

	const watchInputs = watch();
	//const buttonBack = cn(styles.button, styles.button_back);

	const onSubmit = dataSubmit => {
		console.log('dataSubmit2', dataSubmit);
	};

	const handleClick = () => {
		dispatch(setData(watchInputs));
		navigate('/3');
	};

	const handleSkillSelect = skill => {
		const isSkillSelected = selectedSkills.includes(skill);
		setSelectedSkills(prevSkills =>
			isSkillSelected
				? prevSkills.filter(selectedSkill => selectedSkill !== skill)
				: [...prevSkills, skill],
		);
	};
	return (
		<>
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
				<form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
					<h2 className={styles.title}>Требования и обязанности</h2>
					<ul className={styles.input_list}>
						<li className={styles.input_container}>
							<label htmlFor="checkbox" className={styles.input_label}>
								Опыт работы *
							</label>
							<div>
								{EXPERIENCE.map(field => (
									<div key={field.id} className={styles.checkbox_container}>
										<input
											type="checkbox"
											className={styles.checkbox}
											value={field.text}
											{...register('experience')}
										/>
										<p className={styles.description}>{field.text}</p>
										{errors.experience && <span>{errors.experience.message}</span>}
									</div>
								))}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="education" className={styles.input_label}>
								Образование *
							</label>
							<div>
								{EDUCATION.map(field => (
									<div key={field.id} className={styles.checkbox_container}>
										<input
											type="checkbox"
											className={styles.checkbox}
											value={field.text}
											{...register('education')}
										/>
										<p className={styles.description}>{field.text}</p>
										{errors.education && <span>{errors.education.message}</span>}
									</div>
								))}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="responsibilities" className={styles.input_label}>
								Обязанности сотрудника *
							</label>
							<textarea
								{...register('responsibilities')}
								id="responsibilities"
								className={styles.textarea_item}
								placeholder=""
							/>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="responsibilities" className={styles.input_label}>
								Отметьте ключевые навыки *
							</label>
							<div>
								<div className={styles.input_description}>
									<span className={styles.input_span}>Актуальные для выбранной профессии</span>
									<div className={styles.input_skills}>
										{SKILLS_DOCTOR.map((skill, index) => (
											<div key={index} className={styles.skill_item}>
												<button
													type="button"
													className={cn(styles.skill_button, {
														[styles.selected]: selectedSkills.includes(skill),
													})}
													onClick={() => handleSkillSelect(skill)}
													{...register('skills')}
												>
													{skill}
												</button>
											</div>
										))}
									</div>
								</div>
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="requirements" className={styles.input_label}>
								Требования к сотруднику
							</label>
							<textarea
								{...register('requirements')}
								id="requirements"
								className={styles.textarea_item}
								placeholder="Обязательные или те, которые приветствуются"
							/>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="checkbox" className={styles.input_label}>
								Дополнительные условия
							</label>
							<div>
								{ADDITIONAL.map(field => (
									<div key={field.id} className={styles.checkbox_container}>
										<input
											type="checkbox"
											className={styles.checkbox}
											value={field.text}
											{...register('additional')}
										/>
										<p className={styles.description}>{field.text}</p>
										{errors.additional && <span>{errors.additional.message}</span>}
									</div>
								))}
							</div>
						</li>
						<li className={styles.input_container}>
							<label htmlFor="checkbox" className={styles.input_label}>
								Бонусы
							</label>
							<div>
								{BONUSES.map(field => (
									<div key={field.id} className={styles.checkbox_container}>
										<input
											type="checkbox"
											className={styles.checkbox}
											value={field.text}
											{...register('bonuses')}
										/>
										<p className={styles.description}>{field.text}</p>
										{errors.bonuses && <span>{errors.bonuses.message}</span>}
									</div>
								))}
							</div>
						</li>

						<h2 className={styles.titlte_span}>О работодателе</h2>
						<li className={styles.input_container}>
							<label htmlFor="company" className={styles.input_label}>
								Название организации
							</label>
							<div>
								<input
									{...register('company')}
									type="text"
									id="company"
									className={inputLarge}
									placeholder="ИП Иванов Иван Иванович"
								/>
							</div>
						</li>

						<li className={styles.input_container}>
							<label htmlFor="description" className={styles.input_label}>
								Описание
							</label>
							<textarea
								{...register('description')}
								id="description"
								className={styles.textarea_item}
								placeholder="Эта информация может заинтересовать соискателя"
							/>
						</li>
					</ul>
					<div className={styles.button_container}>
						<>
							<button className={buttonBack} onClick={() => navigate('/')}>
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

export default Screen2;
