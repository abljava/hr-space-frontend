export const CONDITIONS = [
	{
		id: '1',
		name: 'full',
		text: 'Полная',
	},
	{
		id: '2',
		name: 'partial',
		text: 'Частичная / подработка',
	},
	{
		id: '3',
		name: 'shift_work',
		text: 'Вахтовый метод',
	},
];

export const SCHEDULE = [
	{
		id: '1',
		name: '5/2',
		text: '5/2',
	},
	{
		id: '2',
		name: '6/1',
		text: '6/1',
	},
	{
		id: '3',
		name: '2/2',
		text: '2/2',
	},
	{
		id: '4',
		name: 'free',
		text: 'Свободный',
	},
	{
		id: '5',
		name: 'one_shot',
		text: 'Разовое задание',
	},
	{
		id: '6',
		name: 'weekend',
		text: 'По выходным',
	},
	{
		id: '7',
		name: 'other',
		text: 'Другое',
	},
];

export const CONTRACT = [
	{
		id: '1',
		name: 'contract',
		text: 'Трудовой договор',
	},
	{
		id: '2',
		name: 'cotract_ip',
		text: 'Договор ГПХ с ИП',
	},
	{
		id: '3',
		name: 'selfbusy',
		text: 'Договор с самозанятым',
	},
	{
		id: '4',
		name: 'private_person',
		text: 'Договор с физлицом',
	},
];

export const CITIES = [
	{
		id: '1',
		name: 'moscow',
		text: 'Москва',
		metro: [
			{
				id: '1',
				name: 'kurskaya',
				text: 'Курская',
			},
			{
				id: '2',
				name: 'kuntsevskaya',
				text: 'Кунцевская',
			},
		],
	},
	{
		id: '2',
		name: 'moscowski',
		text: 'Московский',
	},
	{
		id: '3',
		name: 'podolski_moskowskaya_obl',
		text: 'Подольск (Московская область)',
	},
	{
		id: '4',
		name: 'viborg',
		text: 'Выборг',
	},
	{
		id: '5',
		name: 'vishni_volochok',
		text: 'Вышний Волочок',
	},
	{
		id: '6',
		name: 'samara',
		text: 'Самара',
	},
	{
		id: '7',
		name: 'saint_petersburg',
		text: 'Санкт-Петербург',
	},
	{
		id: '8',
		name: 'saratov',
		text: 'Саратов',
	},
];

export const PROFESSIONS = [
	{
		id: '1',
		name: 'doctor',
		text: 'Врач',
	},
	{
		id: '2',
		name: 'programmer',
		text: 'Программист',
	},
	{
		id: '3',
		name: 'specialist',
		text: 'Специалист',
	},
];

export const EXPERIENCE = [
	{
		id: '1',
		name: 'no_experience',
		text: 'Без опыта',
	},
	{
		id: '2',
		name: '1–3_years',
		text: '1–3 года',
	},
	{
		id: '3',
		name: '3–6_years',
		text: '3–6 лет',
	},
	{
		id: '4',
		name: 'over_6_years',
		text: 'Более 6 лет',
	},
	{
		id: '5',
		name: 'no_matter',
		text: 'Не имеет значения',
	},
];

export const EDUCATION = [
	{
		id: '1',
		name: 'secondary',
		text: 'Среднее',
	},
	{
		id: '2',
		name: 'secondary_special',
		text: 'Среднее специальное',
	},
	{
		id: '3',
		name: 'incomplete_higher',
		text: 'Неоконченное высшее',
	},
	{
		id: '4',
		name: 'higher',
		text: 'Высшее',
	},
	{
		id: '5',
		name: 'bachelor',
		text: 'Бакалавр',
	},
	{
		id: '6',
		name: 'master',
		text: 'Магистр',
	},
	{
		id: '7',
		name: 'phd_candidate',
		text: 'Кандидат наук',
	},
	{
		id: '8',
		name: 'doctorate',
		text: 'Доктор наук',
	},
	{
		id: '9',
		name: 'no_matter',
		text: 'Не имеет значения',
	},
];
export const SKILLS_DOCTOR = [
	'Анестезиология',
	'Стоматология',
	'Неотложная помощь',
	'Медицинская документация',
	'Седация',
	'Грамотная речь',
	'Пользователь ПК',
];

export const SKILLS_DEV = [
	'HTML',
	'CSS',
	'JavaScript',
	'Python',
	'PHP',
	'jQuery',
	'Bootstrap',
	'Git',
	'GitHub',
	'БЭМ',
	'Redux',
	'Английский язык',
];

export const VACANCIES = ['Врач-анестезиолог', 'Фронтенд-разработчик', 'Другое'];

export const TAGS = [
	'Специальные навыки:',
	'Квалификация:',
	'Понимание бизнеса:',
	'Дополнительные задачи:',
];

export const INFORMATION = [
	{
		id: '1',
		name: 'resume',
		text: 'Резюме',
	},
	{
		id: '2',
		name: 'interview',
		text: 'Интервью',
	},
	{
		id: '3',
		name: 'candidate comments',
		text: 'Комментарии по кандидату',
	},
	{
		id: '4',
		name: 'test task',
		text: 'Тестовое задание',
	},
];
export const ADDITIONAL = [
	{
		id: '1',
		name: 'trial_period',
		text: 'Испытательный срок',
	},
	{
		id: '2',
		name: 'вusiness_trips',
		text: 'Командировки',
	},
];

export const BONUSES = [
	{
		id: '1',
		name: 'allowances',
		text: 'Надбавки',
	},
	{
		id: '2',
		name: 'VMI',
		text: 'ДМС',
	},
	{
		id: '3',
		name: 'nutrition',
		text: 'Питание',
	},
	{
		id: '4',
		name: 'rental',
		text: 'Аренда жилья',
	},
	{
		id: '5',
		name: 'commute_to_and_from_work',
		text: 'Проезд до работы и обратно',
	},
	{
		id: '6',
		name: 'gas_payment',
		text: 'Оплата бензина',
	},
	{
		id: '7',
		name: 'professional_training',
		text: 'Профобучение',
	},
	{
		id: '8',
		name: 'uniform',
		text: 'Униформа',
	},
	{
		id: '9',
		name: 'parking',
		text: 'Парковка',
	},
	{
		id: '10',
		name: 'rest_area',
		text: 'Зона отдыха',
	},
	{
		id: '11',
		name: 'mobile',
		text: 'Оплата мобильной связи',
	},
	{
		id: '12',
		name: ' discounts',
		text: 'Скидки в компании',
	},
];

export const AMOUNT = [
	{
		id: '1',
		name: '1',
	},
	{
		id: '2',
		name: '2',
	},
	{
		id: '3',
		name: '3',
	},
];

export const PAYMENT = [
	{
		id: '1',
		name: '100% сразу',
	},
	{
		id: '1',
		name: '100% сразу',
	},
	{
		id: '1',
		name: '100% сразу',
	},
];
