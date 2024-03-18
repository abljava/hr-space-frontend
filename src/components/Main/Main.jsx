import styles from './Main.module.scss';

import Vacancy from '../Vacancy/Vacancy';
import CareerProfile from '../CareerProfile/CareerProfile';


function Main() {
	return (
		<section className={styles.main}>
			<Vacancy />
			<CareerProfile />
		</section>
	);
}

export default Main;
