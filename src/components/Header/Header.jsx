import styles from './Header.module.scss';
import hhlogo from '../../assets/images/hhlogo.svg';
import сaption from '../../assets/images/сaption.svg';
import bell from '../../assets/images/bell.svg';
import ava_vk from '../../assets/images/ava_vk.svg';
function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={hhlogo} className={styles.img_logo} alt="Логотип" />
				<img src={сaption} className={styles.img_company} alt="Название компании" />
			</div>
			<nav className={styles.menu}>
				<ul className={styles.list}>
					<li className={styles.item}>Главная</li>
					<li className={styles.item}>Мои заявки</li>
					<li className={styles.item}>Поиск по рынку</li>
					<li className={styles.item}>Счет</li>
					<li className={styles.item}>Помощь</li>
				</ul>
			</nav>
			<div className={styles.user}>
				<img src={bell} className={styles.img_bell} alt="Уведомления" />
				<img src={ava_vk} className={styles.img_vk} alt="VK" />
				<div className={styles.user_info}>
					<span className={styles.user_info_name}>Виталий Крымов</span>
					<span className={styles.user_info_number}>#45732</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
