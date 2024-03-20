import styles from './Switcher.module.scss';

function Switcher({ id }) {
	// console.log('checkbox:', checkbox);

	return (
		<div className={styles.switcher_container}>
			<div className={styles.toggle}>
				<input type="checkbox" id={id} className={styles.check} />
				<div className={styles.switch} />
				<div className={styles.track} />
			</div>
		</div>
	);
}

export default Switcher;
