import { useState } from 'react';
import { PROFESSIONS } from '../../utils/constants';
import styles from './Dropdown.module.scss';

function Dropdown({ selected, setSelected, setIsActive, onChange, name }) {
	return (
		<div className={styles.dropdown}>
			<ul className={styles.list}>
				{PROFESSIONS.map(item => (
					<li
						name={name}
						onChange={e => setSelected(e.target.value)}
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
