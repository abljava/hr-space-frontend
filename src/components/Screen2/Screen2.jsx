import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import cn from 'classnames';
import styles from './Screen2.module.scss';
import close from '../../assets/images/close.svg';
import { workExperience, educationOptions, doctorSkills } from '../../utils/constants';
import Checkbox from '../Checkbox/Checkbox';
function Screen2({ onChange }) {
	const navigate = useNavigate();

	const methods = useForm({ mode: 'onBlur' });
	const [selectedSkills, setSelectedSkills] = useState([]); // Состояние для выбранных навыков

	const buttonBack = cn(styles.button, styles.button_back);

	//const {
	//register,
	//handleSubmit,
	//	watch,
	//formState: { errors },
	//} = useForm({ mode: 'onBlur' });

	//const watchInputs = watch();

	const inputLarge = cn(styles.input_item, styles.input_large);
	const watchInputs = methods.watch();
	const inputSmall = cn(styles.input_item, styles.input_small);
	const labelTop = cn(styles.input_label, styles.input_label_top);
	//const buttonBack = cn(styles.button, styles.button_back);

	const onSubmit = dataSubmit => {
		console.log('dataSubmit2', dataSubmit);
	};

	const handleClick = () => {
		navigate('/3');
		onChange(watchInputs);
	};
	const handleSkillSelect = skill => {
		// Проверяем, был ли навык выбран
		const isSkillSelected = selectedSkills.includes(skill);
		// Если выбран, убираем из списка выбранных, иначе добавляем
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
				<div className={styles.progress_bar}></div>
				<FormProvider {...methods}>
					<form className={styles.form_container} onSubmit={methods.handleSubmit(onSubmit)}>
						<h2 className={styles.title}>Требования и обязанности</h2>
						<ul className={styles.input_list}>
							<li className={styles.input_container}>
								<label htmlFor="checkbox" className={styles.input_label}>
									Опыт работы *
								</label>
								<div>
									{workExperience.map(item => (
										<Checkbox key={item.id} name={item.name} text={item.text} />
									))}
								</div>
							</li>
							<li className={styles.input_container}>
								<label htmlFor="education" className={styles.input_label}>
									Образование *
								</label>
								<div className={styles.checkbox_container}>
									{educationOptions.map(item => (
										<div key={item.id}>
											<Checkbox key={item.id} name={item.name} text={item.text} />
										</div>
									))}
								</div>
							</li>
							<li className={styles.input_container}>
								<label htmlFor="responsibilities" className={styles.input_label}>
									Обязанности сотрудника *
								</label>
								<textarea
									{...methods.register('responsibilities', {
										required: 'Обязательное поле',
									})}
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
											{doctorSkills.map((skill, index) => (
												<div key={index} className={styles.skill_item}>
													<button
														type="button"
														className={cn(styles.skill_button, {
															[styles.selected]: selectedSkills.includes(skill),
														})}
														onClick={() => handleSkillSelect(skill)}
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
									{...methods.register('requirements')}
									id="requirements"
									className={styles.textarea_item}
									placeholder="Обязательные или те, которые приветствуются"
								/>
							</li>
						</ul>
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
					</form>
				</FormProvider>
			</section>
		</>
	);
}

export default Screen2;
