import styles from './Switcher.module.scss';

function Switcher() {
	return (
		<div className={styles.switcher_container}>
			<div className={styles.toggle}>
				<input type="checkbox" className={styles.check} />
				<div className={styles.switch} />
				<div className={styles.track} />
			</div>
		</div>
	);
}

export default Switcher;
