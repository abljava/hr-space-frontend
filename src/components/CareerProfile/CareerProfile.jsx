import { useForm } from 'react-hook-form';
import cn from 'classnames';

import styles from './CareerProfile.module.scss';

function CareerProfile() {
	const { register, handleSubmit } = useForm();

	const inputLarge = cn(styles.input_item, styles.input_large);

	const onSubmit = data => {
		console.log('data', data);
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Новая заявка</h1>
			<div className={styles.progress_bar}></div>
			<form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.title}>Требования и обязанности</h2>
				<ul className={styles.input_list}>
					<li className={styles.input_container}>
						<label htmlFor="workExperience" className={styles.input_label}>
							Опыт работы *
						</label>
						<div className={styles.checkbox_container}>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Без опыта"
									{...register('workExperience')}
									className={styles.checkbox_input}
								/>
								<span className={styles.checkbox_text}>Без опыта</span>
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="1–3 года"
									{...register('workExperience')}
									className={styles.checkbox_input}
								/>
								<span className={styles.checkbox_text}>1–3 года</span>
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="3–6 лет"
									{...register('workExperience')}
									className={styles.checkbox_input}
								/>
								<span className={styles.checkbox_text}>3–6 лет</span>
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Более 6 лет"
									{...register('workExperience')}
									className={styles.checkbox_input}
								/>
								Более 6 лет
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Не имеет значения"
									{...register('workExperience')}
									className={styles.checkbox_input}
								/>
								Не имеет значения
							</label>
						</div>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="workExperience" className={styles.input_label}>
							Образование *
						</label>
						<div className={styles.checkbox_container}>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Среднее"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								<span className={styles.checkbox_text}>Среднее</span>
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Среднее специальное"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								<span className={styles.checkbox_text}>Среднее специальное</span>
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Неоконченное высшее"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								<span className={styles.checkbox_text}>Неоконченное высшее</span>
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Высшее"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								Высшее
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Бакалавр"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								Бакалавр
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Магистр"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								Магистр
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Кандидат наук"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								Кандидат наук
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Доктор наук"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								Доктор наук
							</label>
							<label className={styles.checkbox_label}>
								<input
									type="checkbox"
									value="Не имеет значения"
									{...register('education')}
									className={styles.checkbox_input}
								/>
								Не имеет значения
							</label>
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
							placeholder="Введите обязанности сотрудника..."
						/>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="skills" className={styles.input_label}>
							Ключевые навыки *
						</label>
						<div className={styles.input_skills}>
							<input
								{...register('skills')}
								type="text"
								id="skills"
								className={inputLarge}
								placeholder="Поиск по навыкам"
							/>
							<span className={styles.input_description}>Нужны в выбранной профессии</span>
						</div>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="requirements" className={styles.input_label}>
							Требования к сотруднику *
						</label>
						<textarea
							{...register('requirements')}
							id="requirements"
							className={styles.textarea_item}
							placeholder="Обязательные или те, которые приветствуются"
						/>
					</li>
				</ul>
			</form>
		</section>
	);
}

export default CareerProfile;
