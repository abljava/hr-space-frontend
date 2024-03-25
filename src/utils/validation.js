import * as yup from 'yup';

// export const validation = yup.object().shape({
// 	experience: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
// 	education: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
// 	responsibilities: yup.string().required(),
// 	conditions: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
// 	schedule: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
// 	contract: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
// 	salary_min: yup.string().required(),
// 	salary_max: yup.string().required(),

// 	skills: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
// });

const validation = yup.object().shape({
	conditions: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
	schedule: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
	contract: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один фильтр'),
	salary_min: yup.string().required(),
	salary_max: yup.string().required(),
	experience: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
	education: yup.array().of(yup.string()).min(1, 'Выберите хотя бы одно значение'),
	responsibilities: yup.string().required(),
});

export default validation;
