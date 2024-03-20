import { useFormContext } from 'react-hook-form';

import styles from './Checkbox.module.scss';

function Checkbox({ name, text }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className={styles.checkbox_container}>
			<input type="checkbox" {...register(name)} className={styles.checkbox} />
			<p className={styles.description}>{text}</p>
		</div>
	);
}

export default Checkbox;
