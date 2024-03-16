import styles from './Main.module.scss';
import Vacancy from '../Vacancy/Vacancy';

function Main() {
	return (
		<section className={styles.main}>
			<Vacancy />
		</section>
	);
}

export default Main;
