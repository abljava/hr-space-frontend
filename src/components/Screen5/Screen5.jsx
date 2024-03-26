import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import styles from '../Screen5/Screen5.module.scss';
import { setData } from '../../slices/formSlice/formSlice';
import quality_icon from '../../assets/images/quality_icon.svg';
import timer_icon from '../../assets/images/timer_icon.svg';
import success_icon from '../../assets/images/success_icon.svg';
import mage_goals from '../../assets/images/mage_goals.svg';

function Screen5() {
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
		defaultValues: {},
		resolver: yupResolver(validation),
	});

	const buttonBack = cn(styles.button, styles.button_back);
	const buttonDisabled = cn(styles.button, styles.button_disabled);
	const watchInputs = watch();

	const onSubmit = dataSubmit => {
		console.log('dataSubmit5', dataSubmit);
	};

	const handleClick = () => {
		dispatch(setData(watchInputs));
		navigate('/5');
	};

	return (
		<>
			<section className={styles.container}>
				<h1 className={styles.heading}>Новая заявка</h1>
				<div className={styles.progress_bar}></div>
				<form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
					<h2 className={`${styles.title} ${styles.second_title}`}>Способ оплаты</h2>
					<div className={styles.container_payment}>
						<div className={`${styles.column} ${styles.first}`}>
							<div className={styles.name}>
								<p className={styles.color_text_one}>100%</p>
							</div>
							<div className={styles.content}>
								<p className={styles.content_text}>100% сразу после выхода сотрудника</p>
							</div>
							<input {...register('100_percent_before')} type="radio" className={styles.radio} />
						</div>
						<div className={`${styles.column} ${styles.second}`}>
							<div className={styles.name}>
								<p className={styles.color_text_two}>50/50</p>
							</div>
							<div className={`${styles.content} ${styles.additional_content}`}>
								<p className={styles.first_line}>50% после выхода</p>
								<p className={styles.second_line}>50% после гарантийного периода</p>
							</div>
							<input {...register('50_50')} type="radio" className={styles.radio} />
						</div>
						<div className={`${styles.column} ${styles.third}`}>
							<div className={styles.name}>
								<p className={styles.color_text_three}>100%</p>
							</div>
							<div className={styles.content}>
								<p className={styles.content_text}>100% после гарантийного периода</p>
							</div>
							<input {...register('100_percent_after')} type="radio" className={styles.radio} />
						</div>
					</div>
					<h2 className={`${styles.title} ${styles.third_title}`}>
						Почему стоит довериться рекрутерам?
					</h2>
					<div className={styles.wrapper}>
						<div className={`${styles.column_recruiter} ${styles.column_first}`}>
							<img src={quality_icon} alt="Награда" />
							<h3 className={styles.title__recruiter}>
								Гарантированный доступ к лучшим кандидатам
							</h3>
							<p className={styles.subtitle_recruiter}>
								Вы получаете доступ к широкому кругу потенциальных сотрудников, которых бывает
								сложно найти самостоятельно.
							</p>
						</div>
						<div className={`${styles.column_recruiter} ${styles.column_second}`}>
							<img src={timer_icon} alt="Часы" />
							<h3 className={styles.title__recruiter}>
								Инвестиция в успешное будущее вашего бизнеса
							</h3>
							<p className={styles.subtitle_recruiter}>
								Доверившись профессионалам, вы направляете вашу энергию на более важные задачи
								ведения бизнеса, а мы заботимся о том, чтобы к вам пришли лучшие кандидаты.
							</p>
						</div>
						<div className={`${styles.column_recruiter} ${styles.column_third}`}>
							<img src={success_icon} alt="Успех" />
							<h3 className={styles.title__recruiter}>Экспертное понимание рынка труда</h3>
							<p className={styles.subtitle_recruiter}>
								Вы экономите время и ресурсы и получаете возможность найти не просто сотрудника, а
								именно того, кто станет ценным активом для вашей команды и компании в целом.
							</p>
						</div>
						<div className={`${styles.column_recruiter} ${styles.column_fourth}`}>
							<img src={mage_goals} alt="Мишень" />
							<h3 className={styles.title__recruiter}>Надежда на результат</h3>
							<p className={styles.subtitle_recruiter}>
								Хотя никто не дает 100% гарантии, сотрудничество с рекрутером увеличивает шансы
								найти идеального кандидата, что повышает эффективность процесса подбора.
							</p>
						</div>
					</div>
					<div className={`${styles.button_container} ${styles.secondary_button_container}`}>
						<>
							<button className={buttonBack} onClick={() => navigate('/4')}>
								Назад
							</button>
							<button
								// disabled={!isValid}
								// className={!isValid ? styles.button : buttonDisabled}
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
export default Screen5;
