import { useForm } from 'react-hook-form';
import cn from 'classnames';

import Switcher from '../Switcher/Switcher';

import styles from './Vacancy.module.scss';

function Vacancy() {
	const { register, handleSubmit } = useForm();

	const inputLarge = cn(styles.input_item, styles.input_large);

	const onSubmit = data => {
		console.log('data', data);
	};

	const handleClick = () => {
		console.log('click');
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Новая заявка</h1>
			<div className={styles.progress_bar}></div>

			<form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.title}>О вакансии</h2>
				<ul className={styles.input_list}>
					<li className={styles.input_container}>
						<label htmlFor="vacancy" className={styles.input_label}>
							Название вакансии *
						</label>
						<input
							{...register('vacancy')}
							type="text"
							id="vacancy"
							className={inputLarge}
							placeholder=""
						/>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="profession" className={styles.input_label}>
							Профессия *
						</label>
						<input
							{...register('profession')}
							type="text"
							id="profession"
							className={styles.input_item}
							placeholder=""
						/>
					</li>
					<li className={styles.input_container}>
						<label htmlFor="city" className={styles.input_label}>
							Место работы *
						</label>
						<input
							{...register('city')}
							type="text"
							id="city"
							className={styles.input_item}
							placeholder=""
						/>
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
						<Switcher />
					</li>

					<li className={styles.input_container}>
						<label htmlFor="timezone" className={styles.input_label}>
							Часовые пояса
						</label>
						<input
							{...register('timezone')}
							type="text"
							id="timezone"
							className={styles.input_item}
							placeholder=""
						/>
						<input
							{...register('timezone')}
							type="text"
							id="timezone"
							className={styles.input_item}
							placeholder=""
						/>
					</li>
				</ul>
				<button className={styles.button} onClick={handleClick} type="submit">
					Далее
				</button>
			</form>
		</section>
	);
}

export default Vacancy;
