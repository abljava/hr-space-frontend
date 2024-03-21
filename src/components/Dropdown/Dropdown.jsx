import { useState } from 'react';
import { PROFESSIONS } from '../../utils/constants';
import styles from './Dropdown.module.scss';

function Dropdown({ selected, setSelected, setIsActive }) {
	return (
		<div className={styles.dropdown}>
			<ul className={styles.list}>
				{PROFESSIONS.map(item => (
					<li
						onClick={e => {
							console.log('click');
							setSelected(item.text);
							setIsActive(false);
						}}
						className={styles.list_item}
						key={item.id}
					>
						{item.text}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Dropdown;
