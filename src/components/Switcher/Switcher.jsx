import { useFormContext } from 'react-hook-form';
import styles from './Switcher.module.scss';

function Switcher({ id }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	// console.log('checkbox:', checkbox);

	return (
		<div className={styles.switcher_container}>
			<div className={styles.toggle}>
				<input type="checkbox" id={id} {...register(id)} className={styles.check} />
				<div className={styles.switch} />
				<div className={styles.track} />
			</div>
		</div>
	);
}

export default Switcher;
