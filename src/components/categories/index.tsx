import { FC } from 'react';
import styles from './index.module.scss';
import { GridIcon } from '../emojiMicrosoft';
import categoriesData from '../../data/listofCategory';

interface CategoriesProps {
	name: string;
}

const Categories: FC<CategoriesProps> = ({ name }) => {
	let color, icon;

	categoriesData.map(category => {
		if (name.includes(category.name)) {
			color = category.color;
			icon = category.icon;
		}
	});

	return name !== 'others' ? (
		<div className={styles.category}>
			<div
				className={styles.category__background}
				style={{
					backgroundColor: color,
				}}
			></div>

			<div className={styles.category__foreground}>{icon}</div>
		</div>
	) : (
		<div className={styles.category}>
			<div
				// prettier-ignore
				className={`${styles.category__background} ${styles['category__background--others']}`}
			></div>

			<div
				// prettier-ignore
				className={`${styles.category__foreground} ${styles['category__foreground--others']}`}
			>
				<GridIcon />
			</div>
		</div>
	);
};

export default Categories;
